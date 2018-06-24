import * as moment from 'moment';
import {Comment} from "@app/core/model/comment";
import {AuthorUser} from "@app/core/model/authorUser";
import * as firebase from "firebase";
import {ArticleBody} from "@app/core/model/article-body";

export class Article {

  public id: string;
  public title: string;
  public body: ArticleBody;
  public timestamp: number;
  public likes: Array<string> = [];
  public dislikes: Array<string> = [];
  public laughs: Array<string> = [];
  public comments: Array<Comment> = [];
  public author: AuthorUser;

  constructor(title: string, body: ArticleBody, user: firebase.User) {
    this.title = title;
    this.body = body;
    this.timestamp = moment().unix() * 1000;
    this.author = new AuthorUser(user);
  }

}
