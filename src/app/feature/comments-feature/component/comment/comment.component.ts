import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import * as firebase from "firebase";
import {Comment} from "@app/core/model/comment";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() user: firebase.User;
  @Input() comment: Comment;
  @Output() onCommentUpdated = new EventEmitter();

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
  }

  updateComment() {
    this.onCommentUpdated.emit();
  }
}
