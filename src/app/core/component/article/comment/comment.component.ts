import {Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {Comment} from "@app/core/model/comment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() user: firebase.User;
  @Input() comment: Comment;

  constructor() {
  }

  ngOnInit() {
  }

}
