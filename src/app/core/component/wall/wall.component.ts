import {Component, OnInit} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleEventHandlerService} from "@app/core/service/article-event-handler.service";
import {ArticleRepository} from "@app/core/service/article-repository.service";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleEventHandlerService: ArticleEventHandlerService,
              private articleRepository: ArticleRepository) {
  }

  ngOnInit() {
    this.articleEventHandlerService.getEventSubject().subscribe(article => this.articles.push(article));

    this.articleRepository.findAll().subscribe(response => {
        response.forEach(article => this.articles.push(article));
      },
      error => {
        console.warn(error);
      });
  }

}
