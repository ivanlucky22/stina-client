import {Injectable} from '@angular/core';
import {Article} from "@app/core/model/article";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs";
import * as firebase from "firebase";

@Injectable()
export class FirebaseService {

  constructor(private _afs: AngularFirestore) {
    this._afs = _afs;
  }

  save(article: Article, collection) {
    const id = this._afs.createId();
    article.id = id;
    collection.doc(id).set(article)
      .then((result) => {
        console.log('Saved successfully ', result);
      }).catch((err) => {
      console.log('Saving failed ', err);
    });
  }

  getArticleRef(id: string) {
    return this.articlesCollection.doc(id);
  }


  getUserRefById(id: string): Observable<firebase.User> {
    return this._afs.doc<firebase.User>('users/' + id).valueChanges();
  }

  get afs(): AngularFirestore {
    return this._afs;
  }

  get articlesCollection() {
    return this.articlesCollection;
  }
}
