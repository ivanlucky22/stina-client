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
import {filter} from "rxjs/operators";
import * as _ from "lodash";
import {ArticleService} from "@app/core/service/article.service";

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
  articlesFeedsSubscriptions = [];

  constructor(private articleRepository: ArticleRepository,
              private articleService: ArticleService,
              private modalService: BsModalService,
              private router: Router,
              private route: ActivatedRoute,
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
    this.articlesFeedsSubscriptions.push(onChangeSubscription);

    this.preLoadedArticle = new Article('Пиши на всю страну анонимно!', new Story([new TextStoryItem('У тебя есть уникальный шанс написать на весь мир то что ты давно не решался сказать')]), null, []);

    const sub = this.route.params.pipe(
      filter(param => {
        return param.filterId;
      })
    ).subscribe(params => {
      console.log("params " + JSON.stringify(params));
      this.unSubscribeFromArticlesFeeds();
      this.articleService.findArticlesByLabels(this.getTags(params)).subscribe((articles: Article[]) => {
          this.articles = articles;
          self.articlesLoaded.emit();
        }
      );
      // In a real app: dispatch action to load the details here.
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
}
