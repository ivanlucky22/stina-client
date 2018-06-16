import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "@app/core/service/auth/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as firebase from "firebase";
import * as _ from "lodash";

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit, AfterViewInit, OnDestroy {

  public user: firebase.User;
  subscriptions = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscriptions.push(this.userService.authState().subscribe((user) => {
        this.user = user;
        console.log('navifation got user ' + user)
        this.ref.detectChanges();
        // subscription.unsubscribe();
      })
    );
  }

  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === '0') {
      // this.userService.getCurrentUser().subscribe(user => {
      //   this.user = user;
      //   this.ref.detectChanges();
      // });
    }
  }

  ngOnDestroy(): void {
    _.forEach(this.subscriptions, subscription => subscription.unsubscribe());
  }

}
