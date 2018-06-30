import {StoryItem, StoryItemType} from "@app/core/model/story-item";

export class TextStoryItem implements StoryItem {
  data: any;
  editMode: boolean;
  type: StoryItemType;

  constructor(data: string = "") {
    this.data = data;
    this.type = StoryItemType.TEXT;
  }
}
