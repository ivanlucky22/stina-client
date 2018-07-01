import {Injectable} from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {FireBaseModel} from "@app/core/model/fire-base-model";

@Injectable()
export class FirebaseService<T extends FireBaseModel> {

  constructor(private _afs: AngularFirestore) {
    this._afs = _afs;
  }

  save(model: T, collection): T {
    const id = this._afs.createId();
    model.id = id;
    collection.doc(id).set(model)
      .then((result) => {
        console.log('Saved successfully ', result);
      }).catch((err) => {
      console.log('Saving failed ', err);
    });
    return model;
  }

  getArticleRef(id: string) {
    return this.articlesCollection.doc(id);
  }

  get afs(): AngularFirestore {
    return this._afs;
  }

  get articlesCollection() {
    return this.articlesCollection;
  }
}
