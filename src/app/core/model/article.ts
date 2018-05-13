import * as moment from 'moment';
import {ArticleVO} from "@app/core/model/articleVO";

export class Article extends ArticleVO {

  constructor(title: string, body: string, owner: string) {
    super();
    this.title = title;
    this.body = body;
    this.owner = owner;
    this.timestamp = moment().unix() * 1000;
  }

}
