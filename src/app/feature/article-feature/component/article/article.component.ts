import {Component, Input, OnInit} from '@angular/core';
import {Article} from "@app/core/model/article";
import {ArticleRepository} from "@app/core/service/repository/article-repository.service";
import * as firebase from "firebase";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input() article: Article;
  @Input() user: firebase.User;
  commentsVisible = false;

  constructor(private articleRepository: ArticleRepository,
              public translate: TranslateService) {
  }

  ngOnInit() {
  }

  showComments() {
    this.commentsVisible = !this.commentsVisible;
  }

  updateArticle() {
    this.articleRepository.update(this.article);
  }

}
