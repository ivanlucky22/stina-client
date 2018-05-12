import * as moment from 'moment';

export class Article {

  public id: string;
  public title: string;
  public body: string;
  public timestamp: number;
  public likes: number;
  public hates: number;
  public owner: string;

  constructor(title: string, body: string, owner: string) {
    this.title = title;
    this.body = body;
    this.owner = owner;
    this.timestamp = moment().unix() * 1000;
  }

}
