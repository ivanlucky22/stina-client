import {Component, OnInit} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleEventHandlerService} from "@app/core/service/article-event-handler.service";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleEventHandlerService: ArticleEventHandlerService) {
  }

  ngOnInit() {
    this.articleEventHandlerService.getEventSubject().subscribe(article => this.articles.push(article));
  }

}
