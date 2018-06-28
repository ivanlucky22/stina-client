import {StoryItem, StoryItemType} from "@app/core/model/story-item";

export class TextStoryItem implements StoryItem {
  data: any;
  editorText: any;
  type: StoryItemType;

  constructor(data: string = "") {
    this.data = data;
    this.type = StoryItemType.TEXT;
  }
}
