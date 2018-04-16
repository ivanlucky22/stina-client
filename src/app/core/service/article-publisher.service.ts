import {Injectable} from '@angular/core';
import {Article} from '@app/core/model/article';
import {HttpRequestService} from '@app/core/service/http-request.service';
import {ArticleEventHandlerService} from '@app/core/service/article-event-handler.service';

@Injectable()
export class ArticlePublisherService {

  constructor(private requestService: HttpRequestService,
              private articleEventHandlerService: ArticleEventHandlerService) {
  }

  publish(article: Article) {
    this.requestService.postArticle(article).subscribe(resp => {
      this.articleEventHandlerService.getEventSubject().next(article);
    }, error => {
      console.warn(error);
    });
  }
}
