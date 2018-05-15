import {Component, OnInit} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from "@app/core/service/article-repository.service";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  articles: Article[] = [];

  constructor(private articleRepository: ArticleRepository) {
  }

  ngOnInit() {

    this.articleRepository.findAll().subscribe(response => {
        this.articles = response;
      },
      error => {
        console.warn(error);
      });
  }

}
