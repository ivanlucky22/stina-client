import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as firebase from "firebase";
import * as _ from "lodash";
import {ArticleService} from "../../../../core/service/article.service";
import {Story} from "../../../../core/model/story";
import {StoryItem, StoryItemType} from "../../../../core/model/story-item";
import {TextStoryItem} from "../../../../core/model/text-story-item";
import {ImageStoryItem} from "../../../../core/model/image-story-item";

@Component({
  selector: 'app-publishing-form',
  templateUrl: './publishing-form.component.html',
  styleUrls: ['./publishing-form.component.css']
})
export class PublishingFormComponent implements OnInit {

  @Input() user: firebase.User;
  @Output() onPublish: EventEmitter<any> = new EventEmitter();
  storyItems: StoryItem[] = [];

  fileUploading: boolean;

  constructor(private articleService: ArticleService) {
    this.storyItems.push(new TextStoryItem());
  }

  ngOnInit() {
  }

  publishMessage(newMessageTitle: HTMLInputElement) {
    const textContent = this.getTextContent();
    if (textContent) {
      if (!newMessageTitle.value) {
        newMessageTitle.value = textContent.slice(0, 47) + '...';
      }

      const story = new Story(this.storyItems);
      this.articleService.save(newMessageTitle.value, story, this.user);
      this.onPublish.emit();
    }
    return false;
  }


  private getTextContent() {
    const firstTextItem: TextStoryItem = _.head(this.storyItems.filter(i => i.type === StoryItemType.TEXT)) as TextStoryItem;
    return firstTextItem.editorText;
  }

  addImageStoryItem(file: File) {
    this.storyItems.push(new ImageStoryItem(file));
    this.storyItems.push(new TextStoryItem());
  }
}
