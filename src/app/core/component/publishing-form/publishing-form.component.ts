import {Component, OnInit} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticlePublisherService} from '@app/core/service/article-publisher.service';

@Component({
  selector: 'app-publishing-form',
  templateUrl: './publishing-form.component.html',
  styleUrls: ['./publishing-form.component.css']
})
export class PublishingFormComponent implements OnInit {

  constructor(private articlePublisher: ArticlePublisherService) {
  }

  ngOnInit() {
  }

  publishMessage(newMessageTitle: HTMLInputElement, newMessageBody: HTMLTextAreaElement) {
    this.articlePublisher.publish(new Article(newMessageTitle.value, newMessageBody.value));
    return false;
  }
}
