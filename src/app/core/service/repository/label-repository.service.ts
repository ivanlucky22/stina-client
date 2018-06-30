import {Injectable} from '@angular/core';
import {FirebaseService} from "@app/core/service/firebase.service";
import {Label} from "@app/core/model/label";

@Injectable()
export class LabelRepositoryService {

  constructor(private firebaseService: FirebaseService) {
  }

  save(label: Label) {
    // this.firebaseService.save(this.toPureJavaScript(label));
  }

  private toPureJavaScript(label: Label) {
    return JSON.parse(JSON.stringify(label));
  }
}
