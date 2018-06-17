import {Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {Comment} from "../../../../model/comment";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() user: firebase.User;
  @Input() comment: Comment;

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

}
