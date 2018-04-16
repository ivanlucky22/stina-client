import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Article} from '@app/core/model/article';

@Injectable()
export class HttpRequestService {

  constructor(private client: HttpClient) {
  }

  public getArticles(): Observable<any> {
    return this.client.get('/api/articles');
  }

  public postArticle(article: Article): Observable<any> {
    return this.client.post('/api/article', article);
  }

}
