import {Component, OnInit} from '@angular/core';
import {UserService} from "@app/core/service/auth/user.service";
import * as firebase from "firebase";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  loaded = false;
  user: firebase.User;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.signInAnonymously();
    const subscription = this.userService.getUserObservable().subscribe((user) => {
      this.user = user;
      subscription.unsubscribe();
    });

  }

  onArticlesLoaded() {
    this.loaded = true;
  }
}
