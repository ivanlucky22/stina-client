import * as moment from 'moment';
import {ArticleVO} from "@app/core/model/articleVO";
import {Comment} from "@app/core/model/comment";

export class Article extends ArticleVO {

  comments: Array<Comment> = [];

  constructor(title: string, body: string, owner: string) {
    super();
    this.title = title;
    this.body = body;
    this.owner = owner;
    this.timestamp = moment().unix() * 1000;
  }

}
