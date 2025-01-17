import {Injectable} from '@angular/core';
import {ArticleRepository} from "@app/core/service/repository/article-repository.service";
import * as firebase from "firebase";
import {ImageRepositoryService} from "@app/core/service/repository/image-repository.service";
import {Story} from "@app/core/model/story";
import {StoryItemType} from "@app/core/model/story-item";
import {ImageStoryItem} from "@app/core/model/image-story-item";
import {Article} from "@app/core/model/article";
import {Label} from "@app/core/model/label";
import * as _ from "lodash";
import {map} from "rxjs/operators";

@Injectable()
export class ArticleService {

  constructor(private articleRepository: ArticleRepository,
              private imageRepository: ImageRepositoryService) {
  }

  save(title: string, story: Story, user: firebase.User, selectedLabels: Label[]) {

    const imageStoryItems: ImageStoryItem[] = story.items.filter(item => item.type === StoryItemType.IMAGE).map(s => s as ImageStoryItem);
    if (imageStoryItems.length) {
      const saveImages = this.imageRepository.saveImages(imageStoryItems);
      saveImages.subscribe(() => {
        console.log('Next');
        this.articleRepository.save(new Article(title, story, user, selectedLabels));
      });
    } else {
      this.articleRepository.save(new Article(title, story, user, selectedLabels));
    }
  }

  findArticlesByLabels(selectedLabels: any[]) {
    const firstLabel = _.head(selectedLabels);
    return this.articleRepository.findArticlesByLabel(firstLabel)
      .pipe(
        map((articles: Article[]) => {
          return articles.filter((article) => {
            const articleLabels = Object.keys(article.labels);
            return _.difference(articleLabels, selectedLabels).length === 0;
          });
        })
      )
      ;

  }

  find(id: string) {
    return this.articleRepository.find(id);
  }
}
