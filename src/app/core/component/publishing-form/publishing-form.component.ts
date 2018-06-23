import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from '@app/core/service/article-repository.service';
import * as firebase from "firebase";
import {AngularFireStorage} from "angularfire2/storage";

@Component({
  selector: 'app-publishing-form',
  templateUrl: './publishing-form.component.html',
  styleUrls: ['./publishing-form.component.css']
})
export class PublishingFormComponent implements OnInit {

  @Input() user: firebase.User;
  @Output() onPublish: EventEmitter<any> = new EventEmitter();
  showEmojiPanel: boolean;

  fileUploading: boolean;
  downloadURL: any;

  constructor(private articleRepository: ArticleRepository,
              private storage: AngularFireStorage) {
  }

  ngOnInit() {
  }

  publishMessage(newMessageTitle: HTMLInputElement, newMessageBody: HTMLSpanElement) {
    if (newMessageBody.innerText) {
      if (!newMessageTitle.value) {
        newMessageTitle.value = newMessageBody.innerText.slice(0, 50) + '...';
      }
      this.articleRepository.save(new Article(newMessageTitle.value, newMessageBody.innerText, this.user));
      this.onPublish.emit();
    }
    return false;
  }

  addEmoji(event, newMessageBody: HTMLSpanElement) {
    newMessageBody.innerText += event.emoji.native;
  }

  emojiClicked(event: any, newMessageBody: HTMLSpanElement) {
    this.addEmoji(event, newMessageBody);
  }

  uploadFiles(event: any) {
    const file = event.target.files[0];
    const filePath = "articles/" + this.user.uid;
    const fileRef = this.storage.ref(filePath);
    const task = fileRef.put(file);

    task.task.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot: any) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            this.fileUploading = true;
            break;
        }
      },
      (error: any) => {
        console.log('error1 ' + error);
        switch (error.code) {
          case 'storage/unauthorized':
            console.log('User doesn\'t have permission to access the object');

            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
            break;

          case 'storage/unknown':
            console.log('Unknown error occurred, inspect error.serverResponse ' + error.serverResponse);

            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.downloadURL = downloadURL;
          this.fileUploading = false;
          console.log('File available at', downloadURL);
        });
      }
    );
  }
}
