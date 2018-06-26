import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoryItem, StoryItemType} from "@app/core/model/story-item";

@Component({
  selector: 'app-story-item',
  templateUrl: './story-item.component.html',
  styleUrls: ['./story-item.component.css']
})
export class StoryItemComponent implements OnInit {

  @Input() storyItem: StoryItem;
  storyItemType = StoryItemType;
  @Output() onFileUploaded: EventEmitter<File> = new EventEmitter<File>();

  constructor() {
  }

  ngOnInit() {
  }

  fileUploaded(file: File) {
    this.onFileUploaded.emit(file);
  }
}
