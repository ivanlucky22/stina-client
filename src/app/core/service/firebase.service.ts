import {Injectable} from '@angular/core';
import {Article} from "@app/core/model/article";
import {AngularFirestore, AngularFirestoreCollection, DocumentChangeAction} from "angularfire2/firestore";
import {Observable} from "rxjs";
import * as firebase from "firebase";

@Injectable()
export class FirebaseService {

  private ARTICLES_COLLECTION = 'articles';
  private articlesCollection;

  constructor(private afs: AngularFirestore) {
    this.articlesCollection = afs.collection<Article>(this.ARTICLES_COLLECTION);
  }

  save(article: Article) {
    const id = this.afs.createId();
    article.id = id;
    this.articlesCollection.doc(id).set(article)
      .then((result) => {
        console.log('Saved successfully ', result);
      }).catch((err) => {
      console.log('Saving failed ', err);
    });
  }

  getArticleRef(id: string) {
    return this.articlesCollection.doc(id);
  }

  onArticlesChanged(): Observable<DocumentChangeAction<Article>[]> {
    const resultCollection = this.afs.collection<Article>(this.ARTICLES_COLLECTION,
      ref => ref.orderBy('timestamp', 'desc')
        .limit(20));
    return resultCollection.stateChanges();
  }

  getUserRefById(id: string): Observable<firebase.User> {
    return this.afs.doc<firebase.User>('users/' + id).valueChanges();
  }
}
