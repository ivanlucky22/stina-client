import {Component, Input, OnInit} from '@angular/core';
import {Article} from "@app/core/model/article";
import {ArticleRepository} from "@app/core/service/article-repository.service";
import * as _ from 'lodash';
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

  like() {
    this.userLiked ? this.decreaseEmotion(this.article.likes) : this.increaseEmotion(this.article.likes);
  }

  dislike() {
    this.userDisliked ? this.decreaseEmotion(this.article.dislikes) : this.increaseEmotion(this.article.dislikes);
  }

  laugh() {
    this.userLaughed ? this.decreaseEmotion(this.article.laughs) : this.increaseEmotion(this.article.laughs);
  }

  showComments() {
    this.commentsVisible = !this.commentsVisible;
  }

  private increaseEmotion(emotions) {
    emotions.push(this.user.uid);
    this.articleRepository.update(this.article);
  }

  get userLiked(): boolean {
    return this.usedEmotion(this.article.likes);
  }

  get userDisliked(): boolean {
    return this.usedEmotion(this.article.dislikes);
  }

  get userLaughed(): boolean {
    return this.usedEmotion(this.article.laughs);
  }

  private decreaseEmotion(emotions: Array<string>) {
    _.remove(emotions, id => id === this.user.uid);
    this.articleRepository.update(this.article);
  }

  private usedEmotion(emotion) {
    return this.user ? _.includes(emotion, this.user.uid) : 0;
  }
}
