import {Injectable} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleEventHandlerService} from '@app/core/service/article-event-handler.service';
import {FirebaseService} from "@app/core/service/firebase.service";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ArticleRepository {

  constructor(private firebaseService: FirebaseService,
              private articleEventHandlerService: ArticleEventHandlerService) {
  }

  save(article: Article) {
    this.firebaseService.save(article);
    // .subscribe(resp => {
    //   this.articleEventHandlerService.getEventSubject().next(article);
    // }, error => {
    //   console.warn(error);
    //   this.articleEventHandlerService.getEventSubject().next(article);
    // });
  }

  findAll(): Observable<any[]> {
    return this.firebaseService.getArticles();
  }
}
