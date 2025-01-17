import {Component, Input, OnInit} from '@angular/core';
import {CommentRepositoryService} from "@app/core/service/repository/comment-repository.service";
import * as firebase from "firebase";
import {Comment} from "@app/core/model/comment";
import {Article} from "@app/core/model/article";
import {ArticleRepository} from "@app/core/service/repository/article-repository.service";

@Component({
  selector: 'app-comments-container',
  templateUrl: './comments-container.component.html',
  styleUrls: ['./comments-container.component.css']
})
export class CommentsContainerComponent implements OnInit {

  @Input() article: Article;
  @Input() user: firebase.User;
  @Input() comments: Array<Comment>;
  showEmojiPanel: boolean;

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

  updateArticle() {
    this.articleRepository.update(this.article);
  }

  emojiClicked(event, commentText: HTMLInputElement) {
    commentText.value += event.emoji.native;
  }

  onClickedOutside(event) {
    if (this.showEmojiPanel) {
      this.showEmojiPanel = false;
    }
  }
}
