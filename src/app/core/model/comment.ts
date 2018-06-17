import * as moment from 'moment';
import {AuthorUser} from "@app/core/model/authorUser";
import * as firebase from "firebase";

export class Comment {

  author: AuthorUser;
  content: string;
  timestamp: number;
  likes: Array<string> = [];
  dislikes: Array<string> = [];
  laughs: Array<string> = [];

  constructor(user: firebase.User, content: string) {
    this.author = new AuthorUser(user);
    this.content = content;
    this.timestamp = moment().unix() * 1000;
  }
}
