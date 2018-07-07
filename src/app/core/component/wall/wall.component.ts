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
import {ActivatedRoute, Router} from "@angular/router";
import {filter, switchMap} from "rxjs/operators";
import * as _ from "lodash";
import {ArticleService} from "@app/core/service/article.service";
import {FilterService} from "@app/core/service/filter.service";

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit, OnDestroy {

  articles: Article[] = [];
  defaultArticles: Article[] = [];
  @Output() articlesLoaded: EventEmitter<any> = new EventEmitter();
  preLoadedArticle: Article;
  @Input() user: firebase.User;
  @ViewChild("publishArticleModal") modalRef: BsModalRef;
  articlesFeedsSubscriptions = [];
  private DEFAULT_TAG = "new";

  constructor(private articleRepository: ArticleRepository,
              private articleService: ArticleService,
              private modalService: BsModalService,
              private router: Router,
              private route: ActivatedRoute,
              private ref: ChangeDetectorRef,
              private filterService: FilterService) {
  }

  ngOnInit() {
    const self = this;

    const onChangeSubscription = self.articleRepository.onArticlesChanged().subscribe(documentChanges => {
      self.articlesLoaded.emit();
      documentChanges.forEach(function (change) {
          if (change.type === "added") {
            const newArticle = change.payload.doc.data();
            console.log("New article: ", newArticle);
            self.defaultArticles.unshift(newArticle);
            self.ref.detectChanges();
          }
        }
      );
      this.articles = this.defaultArticles;
    });
    this.articlesFeedsSubscriptions.push(onChangeSubscription);

    this.preLoadedArticle = this.initPreLoadedArticle();

    const sub = this.route.params.pipe(
      filter(param => {
        if (!param.filterId || param.filterId === this.DEFAULT_TAG) {
          this.articles = this.defaultArticles;
          this.ref.detectChanges();
          return false;
        }
        return true;
      }),
      switchMap(params => {
        return this.filterService.getArticlesByFilters(this.getTags(params));
      })).subscribe(articles => {
      // this.unSubscribeFromArticlesFeeds();
      this.articles = articles;
      this.articlesLoaded.emit();

    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  closeModal() {
    this.modalRef.hide();
  }

  ngOnDestroy(): void {
    this.unSubscribeFromArticlesFeeds();
    console.log(" destroying WallComponent");
  }

  private unSubscribeFromArticlesFeeds() {
    this.articlesFeedsSubscriptions.forEach(s => s.unsubscribe());
  }

  private getTags(params: any) {
    return _.map(Object.keys(params), key => params[key]);
  }

  private initPreLoadedArticle() {
    return new Article('Пиши на всю страну анонимно!',
      new Story([new TextStoryItem('У тебя есть уникальный шанс написать на весь мир то что ты давно не решался сказать')]), null, []);
  }
}
