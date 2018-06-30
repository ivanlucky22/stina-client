import {Injectable} from '@angular/core';
import {Article} from '../../model/article';
import {FirebaseService} from "../firebase.service";
import {Observable} from "rxjs";
import {AngularFirestoreCollection, DocumentChangeAction} from "angularfire2/firestore";

@Injectable()
export class ArticleRepository {

  private ARTICLES_COLLECTION = 'articles';
  articlesCollection;

  constructor(private firebaseService: FirebaseService) {
    this.articlesCollection = firebaseService.afs.collection<Article>(this.ARTICLES_COLLECTION);
  }

  save(article: Article) {
    this.firebaseService.save(this.toPureJavaScript(article), this.articlesCollection);
  }

  update(article: Article) {
    const articleRef = this.firebaseService.getArticleRef(article.id);
    articleRef.update(this.toPureJavaScript(article)).then(function () {
      console.log("Document successfully updated!");
    })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

  public onArticlesChanged(): Observable<DocumentChangeAction<Article>[]> {
    const resultCollection = this.firebaseService.afs.collection<Article>(this.ARTICLES_COLLECTION,
      ref => ref.orderBy('timestamp', 'asc')
        .limit(20));
    return resultCollection.stateChanges();
  }

  private toPureJavaScript(article: Article) {
    return JSON.parse(JSON.stringify(article));
  }

}
