import {Injectable} from '@angular/core';
import {Article} from '@app/core/model/article';
import {HttpRequestService} from "@app/core/service/http-request.service";

@Injectable()
export class ArticlePublisherService {

  constructor(private requestService: HttpRequestService) {
  }

  publish(article: Article) {
    this.requestService.postArticle(article).subscribe(resp => {

    }, error1 => {
    });
  }
}
