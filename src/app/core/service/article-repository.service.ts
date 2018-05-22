import {Injectable} from '@angular/core';
import {Article} from '@app/core/model/article';
import {FirebaseService} from "@app/core/service/firebase.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleRepository {

  constructor(private firebaseService: FirebaseService) {
  }

  save(article: Article) {
    this.firebaseService.save(this.toPureJavaScript(article));
  }

  findAll(): Observable<any[]> {
    return this.firebaseService.getArticles();
  }

  onArticleChanged(aFunction: any) {
    return this.firebaseService.onArticleChanged(aFunction);
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
    const comments = article.comments.map(comment => Object.assign({}, comment));
    const articleJsObject = Object.assign({}, article);
    articleJsObject.comments = comments;
    return articleJsObject;
  }

}
