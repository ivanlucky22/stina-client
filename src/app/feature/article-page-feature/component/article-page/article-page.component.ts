import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ArticleService} from "@app/core/service/article.service";
import {Article} from "@app/core/model/article";
import * as firebase from "firebase";
import {UserService} from "@app/core/service/auth/user.service";

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
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

    this.subscriptions.push(this.userService.authState().subscribe((user) => {
        this.user = user;
        if (user) {
          const id = this.route.snapshot.paramMap.get('id');
          this.articleService.find(id).subscribe(article => {
            const found: Article = article;
            if (found) {
              this.article = found;
            }
          });
        }
        this.ref.detectChanges();
      })
    );


  }

}
