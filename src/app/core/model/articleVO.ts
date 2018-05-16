export class ArticleVO {

  public id: string;
  public title: string;
  public body: string;
  public timestamp: number;
  public likes: Array<string> = [];
  public dislikes: Array<string> = [];
  public laughs: Array<string> = [];
  public owner: string;

}
