import {Injectable} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleEventHandlerService} from '@app/core/service/article-event-handler.service';
import {FirebaseService} from "@app/core/service/firebase.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleRepository {

  constructor(private firebaseService: FirebaseService,
              private articleEventHandlerService: ArticleEventHandlerService) {
  }

  save(article: Article) {
    this.firebaseService.save(article);
  }

  findAll(): Observable<any[]> {
    return this.firebaseService.getArticles();
  }

  findNewest(): Article[] {
    return this.firebaseService.getNewest();
  }

  update(article: Article) {
    const articleRef = this.firebaseService.getArticleRef(article.id);
    articleRef.update(article).then(function () {
      console.log("Document successfully updated!");
    })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }
}
