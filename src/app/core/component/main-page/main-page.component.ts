import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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

  constructor(private userService: UserService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    const subscription = this.userService.authState().subscribe((user) => {
      this.user = user;
      this.ref.detectChanges();
      // subscription.unsubscribe();
    });

  }

  onArticlesLoaded() {
    this.loaded = true;
    this.ref.detectChanges();
  }
}
