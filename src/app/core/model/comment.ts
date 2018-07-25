import * as moment from 'moment';
import {AuthorUser} from "@app/core/model/authorUser";
import * as firebase from "firebase";
import {Emotionable} from "@app/core/model/interfaces/emotionable";

export class Comment implements Emotionable{

  author: AuthorUser;
  content: string;
  timestamp: number;
  likes: Array<string> = [];
  dislikes: Array<string> = [];
  laughs: Array<string> = [];
  sadEmotions: Array<string> = [];
  noEmotions: Array<string> = [];

  constructor(user: firebase.User, content: string) {
    this.author = new AuthorUser(user);
    this.content = content;
    this.timestamp = moment().unix() * 1000;
  }
}
