import {Injectable} from '@angular/core';
import {ArticleService} from "@app/core/service/article.service";

@Injectable()
export class FilterService {

  tagsArticlesMap: any;

  constructor(private articleService: ArticleService) {
  }

  getArticlesByFilters(tags: any) {
    return this.articleService.findArticlesByLabels(tags);
  }
}
