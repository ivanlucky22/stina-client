import {Injectable} from '@angular/core';
import {Article} from '../../model/article';
import {FirebaseService} from "../firebase.service";
import {Observable} from "rxjs";
import {DocumentChangeAction} from "angularfire2/firestore";
import {Label} from "@app/core/model/label";
import * as _ from "lodash";
import {AngularFirestoreCollection} from "angularfire2/firestore/collection/collection";
import {AngularFirestoreDocument} from "angularfire2/firestore/document/document";
import {DocumentData} from "angularfire2/firestore/interfaces";

@Injectable()
export class ArticleRepository {

  private ARTICLES_COLLECTION = 'articles';
  articlesCollection: AngularFirestoreCollection<Article>;

  constructor(private firebaseService: FirebaseService<Article>) {
    this.articlesCollection = firebaseService.afs.collection<Article>(this.ARTICLES_COLLECTION);
  }

  save(article: Article) {
    this.firebaseService.save(this.toPureJavaScript(article), this.articlesCollection);
  }

  update(article: Article) {
    const articleRef = this.getArticleRef(article.id);
    articleRef.update(this.toPureJavaScript(article)).then(function () {
      console.log("Document successfully updated!");
    })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
      });
  }

  public onArticlesChanged(): Observable<DocumentChangeAction<Article>[]> {
    const resultCollection = this.firebaseService.afs.collection<Article>(this.ARTICLES_COLLECTION,
      ref => ref.orderBy('timestamp', 'asc')
        .limit(20));
    return resultCollection.stateChanges().pipe();
  }

  private toPureJavaScript(article: Article) {
    const parsedArticle = JSON.parse(JSON.stringify(article));
    const labelsMap = {};
    _.forEach(parsedArticle.labels, (label: Label) => {
      labelsMap[label.text] = true;
    });
    parsedArticle.labels = labelsMap;
    return parsedArticle;
  }

  findArticlesByLabel(tag: string): Observable<Article[]> {
    return this.firebaseService.afs.collection<Article>(this.ARTICLES_COLLECTION,
      ref => ref.where('labels.' + tag, '==', true)
    ).valueChanges();
  }

  private getArticleRef(id: string): AngularFirestoreDocument<Article> {
    return this.articlesCollection.doc(id);
  }

  find(id: string): Observable<Article> {
    return this.getArticleRef(id).valueChanges();
  }
}
