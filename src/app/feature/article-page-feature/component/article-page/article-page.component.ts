import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "@app/core/service/article.service";
import {Article} from "@app/core/model/article";
import * as firebase from "firebase";
import {UserService} from "@app/core/service/auth/user.service";
import {combineLatest} from "rxjs";
import * as _ from 'lodash';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit, OnDestroy {
  private article: Article;
  private user: firebase.User;
  private subscriptions: any = [];

  constructor(private router: Router,
              private articleService: ArticleService,
              private userService: UserService,
              private route: ActivatedRoute,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    const userObservable = this.userService.authState();
    const articleObservable = this.articleService.find(id);

    this.subscriptions.push(combineLatest(userObservable, articleObservable).subscribe(([user, article]) => {
        this.user = user;
        if (user) {
          const found: Article = article;
          if (found) {
            this.article = found;
          }
        }
        this.ref.detectChanges();
      })
    );


  }

  ngOnDestroy(): void {
    _.forEach(this.subscriptions, subscription => subscription.unsubscribe());
  }

}
