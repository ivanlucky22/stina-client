import {StoryItem, StoryItemType} from "@app/core/model/story-item";

export class ImageStoryItem implements StoryItem {
  data: any;
  type: StoryItemType;
  previewImage: File;

  constructor(previewImage: File) {
    this.previewImage = previewImage;
    this.type = StoryItemType.IMAGE;
  }
}
