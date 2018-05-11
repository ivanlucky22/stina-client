export class Article {

  public id: string;
  public title: string;
  public body: string;

  constructor(title: string, body: string) {
    this.title = title;
    this.body = body;
  }

}
