import {ArticleBody} from "@app/core/model/article-body";
import {StoryItem, StoryItemType} from "@app/core/model/story-item";
import {TextStoryItem} from "@app/core/model/text-story-item";

export class Story implements ArticleBody {
  items: StoryItem[];

  constructor(storyItems: StoryItem[]) {
    this.items = storyItems.filter(item => item.type === StoryItemType.TEXT)
      .map(s => s as TextStoryItem)
      .map(item => {
        item.data = item.editorText;
        item.editorText = '';
        return item;
      });
  }
}
