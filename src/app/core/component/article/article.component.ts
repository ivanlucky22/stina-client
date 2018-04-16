import {Component, Input, OnInit} from '@angular/core';
import {Article} from "@app/core/model/article";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  constructor() {
  }

  ngOnInit() {
  }

}
