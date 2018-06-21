import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from '@app/core/service/article-repository.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-publishing-form',
  templateUrl: './publishing-form.component.html',
  styleUrls: ['./publishing-form.component.css']
})
export class PublishingFormComponent implements OnInit {

  @Input() user: firebase.User;
  @Output() onPublish: EventEmitter<any> = new EventEmitter();
  showEmojiPanel: boolean;

  constructor(private articleRepository: ArticleRepository) {
  }

  ngOnInit() {
  }

  publishMessage(newMessageTitle: HTMLInputElement, newMessageBody: HTMLSpanElement) {
    if (newMessageBody.innerText) {
      if (!newMessageTitle.value) {
        newMessageTitle.value = newMessageBody.innerText.slice(0, 50) + '...';
      }
      this.articleRepository.save(new Article(newMessageTitle.value, newMessageBody.innerText, this.user));
      this.onPublish.emit();
    }
    return false;
  }

  addEmoji(event, newMessageBody: HTMLSpanElement) {
    newMessageBody.innerText += event.emoji.native;
  }

  emojiClicked(event: any, newMessageBody: HTMLSpanElement) {
    this.addEmoji(event, newMessageBody);
  }
}
