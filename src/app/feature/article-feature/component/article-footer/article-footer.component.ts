import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Article} from "@app/core/model/article";

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.css']
})
export class ArticleFooterComponent implements OnInit {

  @Input() article: Article;
  @Output() showCommentsEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }


  get commentsLength(): any {
    if (!this.article.comments || !this.article.comments.length) {
      return '';
    }
    return ' (' + this.article.comments.length + ')';
  }

  commentsClick() {
    this.showCommentsEvent.emit();
  }
}
