import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {Article} from '@app/core/model/article';
import {ArticleRepository} from "@app/core/service/repository/article-repository.service";
import * as firebase from "firebase";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Story} from "@app/core/model/story";
import {TextStoryItem} from "@app/core/model/text-story-item";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  @Output() articlesLoaded: EventEmitter<any> = new EventEmitter();
  preLoadedArticle: Article;
  @Input() user: firebase.User;
  @ViewChild("publishArticleModal") modalRef: BsModalRef;
  subscriptions = [];

  constructor(private articleRepository: ArticleRepository,
              private modalService: BsModalService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    const self = this;

    const onChangeSubscription = self.articleRepository.onArticlesChanged().subscribe(documentChanges => {
      self.articlesLoaded.emit();
      documentChanges.forEach(function (change) {
        if (change.type === "added") {
          const newArticle = change.payload.doc.data();
          console.log("New article: ", newArticle);
          self.articles.unshift(newArticle);
          self.ref.detectChanges();
        }
      });
    });
    this.subscriptions.push(onChangeSubscription);

    this.preLoadedArticle = new Article('Пиши на всю страну анонимно!', new Story([new TextStoryItem('У тебя есть уникальный шанс написать на весь мир то что ты давно не решался сказать')]), null, []);
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(s => s.unsubscribe());
  }
}
