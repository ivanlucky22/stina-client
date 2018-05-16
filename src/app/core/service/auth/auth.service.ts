import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  signInAnonymously() {
    this.afAuth.auth.signInAnonymously().catch(function (error) {
      console.log(error);
    });
  }

  onAuthStateChanged(afunction) {
    return this.afAuth.auth.onAuthStateChanged(afunction);
  }

}
