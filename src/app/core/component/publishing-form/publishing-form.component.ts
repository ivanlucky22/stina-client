import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from '@app/core/service/article-repository.service';

@Component({
  selector: 'app-publishing-form',
  templateUrl: './publishing-form.component.html',
  styleUrls: ['./publishing-form.component.css']
})
export class PublishingFormComponent implements OnInit {

  @Output() onPublish: EventEmitter<any> = new EventEmitter();

  constructor(private articleRepository: ArticleRepository) {
  }

  ngOnInit() {
  }

  publishMessage(newMessageTitle: HTMLInputElement, newMessageBody: HTMLTextAreaElement) {
    if (newMessageTitle.value && newMessageBody.value) {
      this.articleRepository.save(new Article(newMessageTitle.value, newMessageBody.value, 'anonymous'));
      this.onPublish.emit();
    }
    return false;
  }
}
