import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Article} from "@app/core/model/article";

@Injectable()
export class ArticleEventHandlerService {

  private incomingEventSubject: Subject<Article> = new Subject();

  constructor() {
  }

  public getEventSubject(): Subject<Article> {
    return this.incomingEventSubject;
  }

}
