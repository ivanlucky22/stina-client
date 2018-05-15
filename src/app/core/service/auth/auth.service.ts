import {Injectable} from '@angular/core';
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {
  }

  signInAnonymously() {
    this.afAuth.auth.signInAnonymously().catch(function (error) {
      console.log(error);
    });

    this.afAuth.auth.onAuthStateChanged(function (user: firebase.User) {
      if (user) {
        console.log(user);
      } else {
        console.log('user signed out');
      }
    });
  }

}
