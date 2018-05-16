import {Component, Input, OnInit} from '@angular/core';
import {Article} from "@app/core/model/article";
import {ArticleRepository} from "@app/core/service/article-repository.service";
import {UserService} from "@app/core/service/auth/user.service";
import * as _ from "lodash";
import * as firebase from "firebase";
import * as moment from "moment";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;
  user: firebase.User;

  constructor(private articleRepository: ArticleRepository,
              private userService: UserService) {
  }

  ngOnInit() {
    const subscription = this.userService.getUserObservable().subscribe((user) => {
      this.user = user;
    });
    subscription.unsubscribe();
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

  private increaseEmotion(emotions) {
    emotions.push(this.user.uid);
    this.articleRepository.update(this.article);
  }

  get userLiked(): boolean {
    return _.includes(this.article.likes, this.user.uid);
  }

  get userDisliked(): boolean {
    return _.includes(this.article.dislikes, this.user.uid);
  }

  get userLaughed(): boolean {
    return _.includes(this.article.laughs, this.user.uid);
  }

  private decreaseEmotion(emotions: Array<string>) {
    _.remove(emotions, id => id === this.user.uid);
    this.articleRepository.update(this.article);
  }

  get dateFormat(): string {
    return moment(this.article.timestamp).isSame(moment(), 'day') ? 'shortTime' : 'short';
  }
}
