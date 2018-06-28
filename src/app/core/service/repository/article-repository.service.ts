import {Injectable} from '@angular/core';
import {Article} from '../../model/article';
import {FirebaseService} from "../firebase.service";
import {Observable} from "rxjs";
import {AngularFirestoreCollection, DocumentChangeAction} from "angularfire2/firestore";

@Injectable()
export class ArticleRepository {

  constructor(private firebaseService: FirebaseService) {
  }

  save(article: Article) {
    this.firebaseService.save(this.toPureJavaScript(article));
  }

  onArticlesChanged(): Observable<DocumentChangeAction<Article>[]> {
    return this.firebaseService.onArticlesChanged();
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

  private toPureJavaScript(article: Article) {
    return JSON.parse(JSON.stringify(article));
  }

}
