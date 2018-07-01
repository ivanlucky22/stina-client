import {Injectable} from '@angular/core';
import {FirebaseService} from "@app/core/service/firebase.service";
import {Label} from "@app/core/model/label";
import {AngularFirestoreCollection} from "angularfire2/firestore";
import {Observable} from "rxjs/index";

@Injectable()
export class LabelRepositoryService {
  private LABEL_COLLECTION = "labels";
  private labelsCollection: AngularFirestoreCollection<Label>;

  constructor(private firebaseService: FirebaseService<Label>) {
    this.labelsCollection = firebaseService.afs.collection<Label>(this.LABEL_COLLECTION);
  }

  save(label: Label): Label {
    return this.firebaseService.save(this.toPureJavaScript(label), this.labelsCollection);
  }

  private toPureJavaScript(label: Label) {
    return JSON.parse(JSON.stringify(label));
  }

  findAllLabels(): Observable<Label[]> {
    return this.labelsCollection.valueChanges();
  }
}
