import {Component, OnInit} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from '@app/core/service/article-repository.service';

@Component({
  selector: 'app-publishing-form',
  templateUrl: './publishing-form.component.html',
  styleUrls: ['./publishing-form.component.css']
})
export class PublishingFormComponent implements OnInit {

  constructor(private articleRepository: ArticleRepository) {
  }

  ngOnInit() {
  }

  publishMessage(newMessageTitle: HTMLInputElement, newMessageBody: HTMLTextAreaElement) {
    this.articleRepository.save(new Article(newMessageTitle.value, newMessageBody.value));
    return false;
  }
}
