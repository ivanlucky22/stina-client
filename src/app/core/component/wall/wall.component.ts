import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from "@app/core/service/article-repository.service";
import * as firebase from "firebase";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WallComponent implements OnInit {

  articles: Article[] = [];
  @Output() articlesLoaded: EventEmitter<any> = new EventEmitter();
  preLoadedArticle: Article;
  @Input() user: firebase.User;

  constructor(private articleRepository: ArticleRepository) {
  }

  ngOnInit() {

    this.articleRepository.findAll().subscribe(response => {
        this.articles = response;
        this.articlesLoaded.emit();
      },
      error => {
        console.warn(error);
      });

    this.preLoadedArticle = new Article('Пиши на всю страну анонимно!',
      'У тебя есть уникальный шанс написать на весь мир то что ты давно не решался сказать', '0');
  }

}
