import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "@app/core/service/auth/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as firebase from "firebase";
import * as _ from "lodash";

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit, OnDestroy {

  public user: firebase.User;
  public targetUser: firebase.User;
  private subscriptions = [];

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscriptions.push(this.userService.authState().subscribe((user) => {
        this.user = user;
        if (user) {
          const id = this.route.snapshot.paramMap.get('id');

          if (id && id !== user.uid) {
            this.subscriptions.push(this.userService.getUser(id).subscribe(targetUser => {
              this.targetUser = targetUser;
            }));
          }
        }
        this.ref.detectChanges();
      })
    );
  }

  ngOnDestroy() {
    _.forEach(this.subscriptions, subscription => subscription.unsubscribe());
  }

}
