import {Injectable} from '@angular/core';
import {AngularFireStorage} from "angularfire2/storage";
import * as firebase from "firebase";
import {v4 as uuid} from 'uuid';
import {ImageStoryItem} from "@app/core/model/image-story-item";
import {Observable} from "rxjs/internal/Observable";
import {map} from "rxjs/operators";

@Injectable()
export class ImageRepositoryService {
  private fileUploading: boolean;

  // downloadLinkObservable: Subject<string> = new Subject();

  constructor(private storage: AngularFireStorage) {
  }

  public saveImage(file: File) {
    const filePath = "articles/" + uuid();

    const fileRef = this.storage.ref(filePath);
    const task = fileRef.put(file);


    return task.task.on(firebase.storage.TaskEvent.STATE_CHANGED,
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
        return task.task.snapshot.ref.getDownloadURL();
      });
  }

  saveImages(imageStoryItems: ImageStoryItem[]) {
    return Observable.create(imageStoryItems).pipe(
      map((imageStoryItem: ImageStoryItem) => {
        return this.saveImage(imageStoryItem.image);
      })
    );
  }
}
