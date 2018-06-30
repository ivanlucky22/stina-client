import {ArticleBody} from "@app/core/model/article-body";
import {StoryItem} from "@app/core/model/story-item";

export class Story implements ArticleBody {
  items: StoryItem[];

  constructor(storyItems: StoryItem[]) {
    this.items = storyItems.map(item => {
      delete (item as any).editMode;
      return item;
    });
  }
}
