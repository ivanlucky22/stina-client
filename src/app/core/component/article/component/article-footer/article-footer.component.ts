import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-article-footer',
  templateUrl: './article-footer.component.html',
  styleUrls: ['./article-footer.component.css']
})
export class ArticleFooterComponent implements OnInit {

  @Output() showCommentsEvent: EventEmitter<boolean> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  commentsClick() {
    this.showCommentsEvent.emit();
  }
}
