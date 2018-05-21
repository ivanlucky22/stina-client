import {Injectable} from '@angular/core';
import {Article} from '@app/core/model/article';
import {FirebaseService} from "@app/core/service/firebase.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleRepository {

  constructor(private firebaseService: FirebaseService) {
  }

  save(article: Article) {
    this.firebaseService.save(article);
  }

  findAll(): Observable<any[]> {
    return this.firebaseService.getArticles();
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
    //TODO refactor
    const comments = Object.assign({}, article.comments);
    const assign = Object.assign({}, article);
    assign.comments = comments;
    return assign; // JSON.parse(JSON.stringify(article));
  }

}
