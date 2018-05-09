import {Injectable} from '@angular/core';
import {Article} from "@app/core/model/article";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FirebaseService {

  private articles: Observable<Article[]>;
  private ARTICLES_COLLECTION = 'arcticles';
  private articlesCollection;

  constructor(private db: AngularFirestore) {
    this.articlesCollection = db.collection<Article>(this.ARTICLES_COLLECTION);
    this.articles = this.articlesCollection.valueChanges();
  }

  save(article: Article) {
    this.articlesCollection.add(JSON.parse(JSON.stringify(article)))
      .then((result) => {
        console.log('Saved successfully ', result);
      }).catch((err) => {
      console.log('Saving failed ', err);
    });
  }

  getArticles() {
    return this.articles;
  }
}
