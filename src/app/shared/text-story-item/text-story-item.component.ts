import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TextStoryItem} from "@app/core/model/text-story-item";

@Component({
  selector: 'app-text-story-item',
  templateUrl: './text-story-item.component.html',
  styleUrls: ['./text-story-item.component.css']
})
export class TextStoryItemComponent implements OnInit {
  showEmojiPanel: boolean;
  @Input() storyItem: TextStoryItem;
  @Output() onFileUploaded: EventEmitter<File> = new EventEmitter<File>();

  constructor() {
  }

  ngOnInit() {
  }

  addEmoji(event, newMessageBody: HTMLSpanElement) {
    newMessageBody.innerText += event.emoji.native;
  }

  emojiClicked(event: any, newMessageBody: HTMLSpanElement) {
    this.addEmoji(event, newMessageBody);
  }

  uploadFiles(event) {
    const file: File = event.target.files[0];
    if (file) {
      this.onFileUploaded.emit(file);
    }
  }

}
