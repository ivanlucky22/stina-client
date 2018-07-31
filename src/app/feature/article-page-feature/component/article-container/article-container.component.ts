import {Component, Input, OnInit} from '@angular/core';
import {Article} from "@app/core/model/article";
import * as firebase from "firebase";

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.css']
})
export class ArticleContainerComponent implements OnInit {

  @Input() article: Article;
  @Input() user: firebase.User;

  constructor() {
  }

  ngOnInit() {
  }

}
