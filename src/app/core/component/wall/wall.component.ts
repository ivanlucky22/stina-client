import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from "@app/core/service/article-repository.service";
import * as firebase from "firebase";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Story} from "@app/core/model/story";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {

  articles: Article[] = [];
  @Output() articlesLoaded: EventEmitter<any> = new EventEmitter();
  preLoadedArticle: Article;
  @Input() user: firebase.User;
  @ViewChild("publishArticleModal") modalRef: BsModalRef;

  constructor(private articleRepository: ArticleRepository,
              private modalService: BsModalService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    const self = this;

    self.articleRepository.onArticlesChanged(function (snapshot) {
      self.articlesLoaded.emit();
      snapshot.docChanges().forEach(function (change) {
        if (change.type === "added") {
          console.log("New article: ", change.doc.data());
          self.articles.unshift(change.doc.data());
          self.ref.detectChanges();
        }
      });
    });

    this.preLoadedArticle = new Article('Пиши на всю страну анонимно!',
      new Story('У тебя есть уникальный шанс написать на весь мир то что ты давно не решался сказать'), null);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }
}
