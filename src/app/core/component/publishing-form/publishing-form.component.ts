import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '@app/core/model/article';
import * as firebase from "firebase";
import {AngularFireStorage} from "angularfire2/storage";
import {ArticleService} from "@app/core/service/article.service";
import {ArticleBody} from "@app/core/model/article-body";
import {Story} from "@app/core/model/story";

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
  downloadedPreviewImages: File[] = [];
  downloadedImages: File[] = [];

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
  }

  publishMessage(newMessageTitle: HTMLInputElement, newMessageBody: HTMLSpanElement) {
    if (newMessageBody.innerText) {
      if (!newMessageTitle.value) {
        newMessageTitle.value = newMessageBody.innerText.slice(0, 50) + '...';
      }

      // this.saveImage(this.downloadedImages[0]);
      const story = new Story(newMessageBody.innerText);
      story.image = this.downloadedImages[0];
      this.articleService.save(newMessageTitle.value, story, this.user);
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
    const file: File = event.target.files[0];

    const reader = new FileReader();
    reader.onload = (loaded: any) => {
      this.downloadedPreviewImages.push(loaded.target.result);
      this.downloadedImages.push(file);
    };

    reader.readAsDataURL(file);
  }
}
