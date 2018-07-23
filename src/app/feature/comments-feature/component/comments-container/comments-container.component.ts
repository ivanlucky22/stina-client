import {Component, Input, OnInit} from '@angular/core';
import {CommentRepositoryService} from "../../../../core/service/repository/comment-repository.service";
import * as firebase from "firebase";
import {Comment} from "../../../../core/model/comment";
import {Article} from "../../../../core/model/article";
import {ArticleRepository} from "../../../../core/service/repository/article-repository.service";

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})
export class CommentsContainerComponent implements OnInit {

  @Input() article: Article;
  @Input() user: firebase.User;
  @Input() comments: Array<Comment>;

  constructor(private commentRepository: CommentRepositoryService,
              private articleRepository: ArticleRepository) {
  }

  ngOnInit() {
  }

  addComment(commentText: HTMLInputElement) {
    const value = commentText.value;
    if (value) {
      const comment = new Comment(this.user, value);
      this.article.comments.push(comment);
      this.articleRepository.update(this.article);
      commentText.value = '';
    }
    return false;
  }
}