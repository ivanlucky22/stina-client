import * as moment from 'moment';

export class Article {

  public id: string;
  public title: string;
  public body: string;
  public timestamp: number;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
    this.timestamp = moment().unix();
  }

}
