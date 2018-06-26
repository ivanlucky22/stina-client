import {StoryItem, StoryItemType} from "@app/core/model/story-item";

export class ImageStoryItem implements StoryItem {
  data: any;
  type: StoryItemType;
  image: File;

  constructor(image: File) {
    this.image = image;
    this.type = StoryItemType.IMAGE;
  }
}
