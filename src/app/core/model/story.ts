import {ArticleBody} from "@app/core/model/article-body";

export class Story implements ArticleBody {
  text: string;
  image: any;

  constructor(text: string) {
    this.text = text;
  }
}
