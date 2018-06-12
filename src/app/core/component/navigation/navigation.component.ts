import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {Router} from "@angular/router";
import {UserService} from "@app/core/service/auth/user.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  user: firebase.User;

  constructor(private router: Router,
              private userService: UserService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    const subscription = this.userService.authState().subscribe((user) => {
      this.user = user;
      console.log('navifation got user ' + user)
      this.ref.detectChanges();
      // subscription.unsubscribe();
    });

  }

  redirectToProfilePage() {
    this.router.navigateByUrl('users/0');
  }
}
