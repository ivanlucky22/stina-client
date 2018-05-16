import {Injectable} from '@angular/core';
import {AuthService} from "@app/core/service/auth/auth.service";
import * as firebase from "firebase";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  private userObservable: Observable<firebase.User> = new Observable();

  constructor(private authService: AuthService) {
    const self = this;
    this.authService.onAuthStateChanged(function (user: firebase.User) {
      if (user) {
        self.userObservable = Observable.of(user);
        console.log(user);
      } else {
        console.log('user signed out');
      }
    });
  }

  signInAnonymously() {
    this.authService.signInAnonymously();
  }

  getUserObservable(): Observable<firebase.User> {
    return this.userObservable;
  }
}
