import {Component, Input, OnInit} from '@angular/core';
import {Article} from "@app/core/model/article";
import {ArticleRepository} from "@app/core/service/article-repository.service";
import {UserService} from "@app/core/service/auth/user.service";
import * as _ from "lodash";
import * as firebase from "firebase";

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
    this.increaseEmotion(this.article.likes);
  }

  dislike() {
    this.increaseEmotion(this.article.dislikes);
  }

  laught() {
    this.increaseEmotion(this.article.laughts);
  }

  private increaseEmotion(emotions) {
    const subscription = this.userService.getUserObservable().subscribe((user) => {
      if (!_.includes(emotions, user.uid)) {// TODO store user somewhere
        emotions.push(user.uid);
        this.articleRepository.update(this.article);
      }
    });
    subscription.unsubscribe();
  }


  get likeClicked(): boolean {
    return _.includes(this.article.likes, this.user.uid);
  }

  get dislikeClicked(): boolean {
    return _.includes(this.article.dislikes, this.user.uid);
  }

  get laughtClicked(): boolean {
    return _.includes(this.article.laughts, this.user.uid);
  }
}
