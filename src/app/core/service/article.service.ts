import {Injectable} from '@angular/core';
import {ArticleRepository} from "@app/core/service/article-repository.service";
import {Article} from "@app/core/model/article";
import * as firebase from "firebase";
import {ImageRepositoryService} from "@app/core/service/image-repository.service";
import {Story} from "@app/core/model/story";
import {take, first} from 'rxjs/operators';
import {Observable} from "rxjs/internal/Observable";

@Injectable()
export class ArticleService {

  constructor(private articleRepository: ArticleRepository,
              private imageRepository: ImageRepositoryService) {
  }

  //
  // save(article: Article) {
  //   this.articleRepository.save(article);
  // }

  save(title: string, articleBody: Story, user: firebase.User) {
    this.imageRepository.downloadLinkObservable.asObservable().pipe(first()).subscribe(dowloadLink => {
      articleBody.image = dowloadLink;
      this.articleRepository.save(new Article(title, articleBody, user));
    });
    this.imageRepository.saveImage(articleBody.image, user);

  }
}
