import {Injectable} from '@angular/core';
import {AuthService} from "@app/core/service/auth/auth.service";
import * as firebase from "firebase";
import {Subject, ReplaySubject} from "rxjs";
import {NameGenerationService} from "@app/core/service/name-generation.service";

@Injectable()
export class UserService {

  private userObservable: Subject<firebase.User> = new ReplaySubject();

  constructor(private authService: AuthService,
              private nameGenerationService: NameGenerationService) {
    this.onAuthStateChanged();
  }

  private onAuthStateChanged() {
    this.authService.onAuthStateChanged((user: firebase.User) => {
      if (user) {
        if (!user.displayName) {
          this.setUserDetails(user);
        }
        this.userObservable.next(user);
        console.log('user initialized');
      } else {
        console.log('user signed out');
      }
    });
  }

  private setUserDetails(user: firebase.User) {
    this.nameGenerationService.getNewUserName().subscribe(username => {
      user.updateProfile({
        displayName: username,
        photoURL: '/assets/img/anonymous.png'
      });
    });
  }

  signInAnonymously() {
    this.authService.signInAnonymously();
  }

  // getUserObservable(): Subject<firebase.User> {
  //   return this.userObservable;
  // }

  authState() {
    return this.authService.afAuth.authState;
  }

  signInWithEmailAndPassword(email: any, password: any) {
    return this.authService.signInWithEmailAndPassword(email, password);

  }
}
