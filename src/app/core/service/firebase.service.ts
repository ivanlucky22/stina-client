import {Injectable} from '@angular/core';
import {Article} from "@app/core/model/article";
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs";

@Injectable()
export class FirebaseService {

  private articles: Observable<Article[]>;
  private ARTICLES_COLLECTION = 'arcticles'; // TODO fix collection name
  private articlesCollection;

  constructor(private db: AngularFirestore) {
    this.articlesCollection = db.collection<Article>(this.ARTICLES_COLLECTION);
    this.articles = db.collection<Article>(this.ARTICLES_COLLECTION, ref => ref.orderBy('timestamp', 'desc').limit(20)).valueChanges();
  }

  save(article: Article) {
    const id = this.db.createId();
    article.id = id;
    this.articlesCollection.doc(id).set(article)
      .then((result) => {
        console.log('Saved successfully ', result);
      }).catch((err) => {
      console.log('Saving failed ', err);
    });
  }

  getArticles() {
    return this.articles;
  }

  getArticleRef(id: string) {
    return this.articlesCollection.doc(id);
  }

  onArticleChanged(aFunction) {
    return this.db.firestore.collection(this.ARTICLES_COLLECTION).orderBy('timestamp', 'desc').limit(10).onSnapshot(aFunction);
  }
}
