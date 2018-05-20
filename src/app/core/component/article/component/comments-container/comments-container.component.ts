import {Component, Input, OnInit} from '@angular/core';
import {CommentRepositoryService} from "@app/core/service/comment-repository.service";
import * as firebase from "firebase";
import {Comment} from "@app/core/model/comment";

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})
export class CommentsContainerComponent implements OnInit {

  @Input() articleId: string;
  @Input() user: firebase.User;

  constructor(private commentRepository: CommentRepositoryService) {
  }

  ngOnInit() {
  }

  addComment(commentText: HTMLInputElement) {
    const value = commentText.value;
    if (value) {
      const comment = new Comment(this.user.uid, value);
      this.commentRepository.add(comment);
    }

  }
}
