import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserService} from "@app/core/service/auth/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: 'app-user-details-page',
  templateUrl: './user-details-page.component.html',
  styleUrls: ['./user-details-page.component.css']
})
export class UserDetailsPageComponent implements OnInit, AfterViewInit {

  public user: firebase.User;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id === '0') {
      this.userService.getUserObservable().subscribe(user => {
        this.user = user;
        // this.ref.detectChanges();
      });
    }
  }

}
