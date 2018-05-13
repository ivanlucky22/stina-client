import {Component, Input, OnInit} from '@angular/core';
import {Article} from "@app/core/model/article";
import {ArticleRepository} from "@app/core/service/article-repository.service";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  constructor(private articleRepository: ArticleRepository) {
  }

  ngOnInit() {
  }

  like() {
    this.article.likes += 1;
    this.articleRepository.update(this.article);
  }

  dislike() {
    this.article.dislikes += 1;
    this.articleRepository.update(this.article);
  }

  laught() {
    this.article.laughts += 1;
    this.articleRepository.update(this.article);
  }
}
