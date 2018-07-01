import {FireBaseModel} from "@app/core/model/fire-base-model";

export class Label implements FireBaseModel {
  id: string;
  text: string;
  usedInArticlesTimes = 0;

  constructor(text: string) {
    this.text = text;
    this.id = text;
  }

}
