import {Injectable} from '@angular/core';
import {AuthService} from "@app/core/service/auth/auth.service";
import * as firebase from "firebase";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UserService {

  private userObservable: Subject<firebase.User> = new Subject();

  constructor(private authService: AuthService) {
    const self = this;
    this.authService.onAuthStateChanged(function (user: firebase.User) {
      if (user) {
        self.userObservable.next(user);
      } else {
        console.log('user signed out');
      }
    });
  }

  signInAnonymously() {
    this.authService.signInAnonymously();
  }

  getUserObservable(): Subject<firebase.User> {
    return this.userObservable;
  }
}
