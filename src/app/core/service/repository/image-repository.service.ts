import {Injectable} from '@angular/core';
import {AngularFireStorage} from "angularfire2/storage";
import {v4 as uuid} from 'uuid';
import {ImageStoryItem} from "@app/core/model/image-story-item";
import {flatMap, map} from "rxjs/operators";
import {from} from "rxjs/internal/observable/from";
import {AngularFireStorageReference} from "angularfire2/storage/ref";
import {AngularFireUploadTask} from "angularfire2/storage/task";
import {Observable} from "rxjs/internal/Observable";
import {combineLatest, of, Subject} from "rxjs";
import * as firebase from "firebase";

@Injectable()
export class ImageRepositoryService {
  private fileUploading: boolean;
  downloadLinkObservable: Subject<string> = new Subject();

  constructor(private storage: AngularFireStorage) {
  }

  private saveImage(file: File): Observable<any> {
    const filePath = "articles/" + uuid();

    const fileRef: AngularFireStorageReference = this.storage.ref(filePath);
    const task: AngularFireUploadTask = fileRef.put(file);

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
            break;
          case 'storage/canceled':
            console.log('User canceled the upload');
            break;
          case 'storage/unknown':
            console.log('Unknown error occurred, inspect error.serverResponse ' + error.serverResponse);
            break;
        }
      },
      () => {
        task.task.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log('Image downloaded. Download link ' + downloadURL);
          this.downloadLinkObservable.next(downloadURL);
        });
      }
    );
    return this.downloadLinkObservable.asObservable();
  }

  saveImages(imageStoryItems: ImageStoryItem[]) {
    const pipe = from(imageStoryItems).pipe(
      flatMap((imageStoryItem: ImageStoryItem) => {
        const file = imageStoryItem.previewImage;
        return combineLatest(of(imageStoryItem), this.saveImage(file));
      }),
      map((items: any[]) => {
        const imageItem: ImageStoryItem = items[0];
        const link: string = items[1];
        delete imageItem.previewImage;
        imageItem.data = link;
        return imageItem;
      }));
    return pipe;
  }
}
