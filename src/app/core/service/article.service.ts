import {Injectable} from '@angular/core';
import {ArticleRepository} from "@app/core/service/repository/article-repository.service";
import * as firebase from "firebase";
import {ImageRepositoryService} from "@app/core/service/repository/image-repository.service";
import {Story} from "@app/core/model/story";
import {StoryItemType} from "@app/core/model/story-item";
import {ImageStoryItem} from "@app/core/model/image-story-item";
import {Article} from "@app/core/model/article";

@Injectable()
export class ArticleService {

  constructor(private articleRepository: ArticleRepository,
              private imageRepository: ImageRepositoryService) {
  }

  //
  // save(article: Article) {
  //   this.articleRepository.save(article);
  // }

  save(title: string, story: Story, user: firebase.User) {
    // this.imageRepository.downloadLinkObservable.asObservable().pipe(first()).subscribe(dowloadLink => {
    //   story.items = dowloadLink;
    //   this.articleRepository.save(new Article(title, story, user));
    // });

    const imageStoryItems: ImageStoryItem[] = story.items.filter(item => item.type === StoryItemType.IMAGE).map(s => s as ImageStoryItem);
    if (imageStoryItems.length) {
      this.imageRepository.saveImages(imageStoryItems).subscribe(result => {
        console.log(result);
      });
    } else {
        this.articleRepository.save(new Article(title, story, user));
    }
  }
}
