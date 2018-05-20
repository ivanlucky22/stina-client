import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "@app/core/service/auth/user.service";
import * as firebase from "firebase";

// import {switchMap} from "rxjs/operator";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public user: firebase.User;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === '0') {
      const subscription = this.userService.getUserObservable().subscribe(user => {
        this.user = user;
        this.ref.detectChanges();
        subscription.unsubscribe();
      });
    }

  }

}
