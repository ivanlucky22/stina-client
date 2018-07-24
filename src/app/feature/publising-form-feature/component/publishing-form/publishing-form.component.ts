import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import * as firebase from "firebase";
import * as _ from "lodash";
import {ArticleService} from "../../../../core/service/article.service";
import {Story} from "../../../../core/model/story";
import {StoryItem, StoryItemType} from "../../../../core/model/story-item";
import {TextStoryItem} from "../../../../core/model/text-story-item";
import {ImageStoryItem} from "../../../../core/model/image-story-item";
import {LabelService} from "@app/core/service/label.service";
import {Label} from "@app/core/model/label";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-publishing-form',
  templateUrl: './publishing-form.component.html',
  styleUrls: ['./publishing-form.component.css']
})
export class PublishingFormComponent implements OnInit, OnDestroy {

  @Input() user: firebase.User;
  @Output() onPublish: EventEmitter<any> = new EventEmitter();
  storyItems: StoryItem[] = [];
  labels: Label[] = [];
  fileUploading: boolean;
  selectedLabels: Label[];
  form: FormGroup;
  messageTitleInput = new FormControl('', [
    Validators.required
  ]);

  constructor(private articleService: ArticleService,
              private labelService: LabelService) {
    this.storyItems.push(this.getEditTextStoryItem());
  }

  ngOnInit() {
    this.labelService.getLabels().subscribe((labels: Label[]) => {
      this.labels = labels;
    });

    this.form = new FormGroup({
      'messageTitleInput': this.messageTitleInput
    });
  }

  publishMessage() {
    const textContent = this.getTextContent();
    if (textContent || this.imagesAttached()) {
      const story = new Story(this.storyItems);
      this.articleService.save(this.messageTitleInput.value, story, this.user, this.selectedLabels);
      this.onPublish.emit();
    }
    return false;
  }

  private getTextContent() {
    const firstTextItem: TextStoryItem = _.head(this.storyItems.filter(i => i.type === StoryItemType.TEXT)) as TextStoryItem;
    return firstTextItem.data;
  }

  private imagesAttached() {
    return this.storyItems.some(i => i.type === StoryItemType.IMAGE);
  }

  addImageStoryItem(file: File) {
    this.storyItems.push(new ImageStoryItem(file));
    this.storyItems.push(this.getEditTextStoryItem());
  }

  private getEditTextStoryItem() {
    const textStoryItem = new TextStoryItem();
    textStoryItem.editMode = true;
    return textStoryItem;
  }

  addTag = (name) => {
    return this.labelService.save(new Label(name));
  }

  ngOnDestroy(): void {
    console.log('PublishingFormComponent destroyed');
  }

}
