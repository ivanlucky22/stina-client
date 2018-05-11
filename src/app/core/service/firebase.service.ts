import {Injectable} from '@angular/core';
import {Article} from "@app/core/model/article";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/Observable";

@Injectable()
export class FirebaseService {

  private articles: Observable<Article[]>;
  private instantArticles: Article[];
  private ARTICLES_COLLECTION = 'arcticles';
  private articlesCollection;

  constructor(private db: AngularFirestore) {
    this.articlesCollection = db.collection<Article>(this.ARTICLES_COLLECTION);
    this.articles = db.collection<Article>(this.ARTICLES_COLLECTION, ref => ref.orderBy('timestamp', 'desc').limit(20)).valueChanges();
  }

  save(article: Article) {
    const id = this.db.createId();
    article.id = id;
    this.articlesCollection.doc(id).set(JSON.parse(JSON.stringify(article)))
      .then((result) => {
        console.log('Saved successfully ', result);
      }).catch((err) => {
      console.log('Saving failed ', err);
    });
  }

  getArticles() {
    return this.articles;
  }

  getNewest(): Article[] {
    return this.instantArticles;
  }
}
