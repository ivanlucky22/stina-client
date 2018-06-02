import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "@app/core/service/auth/user.service";
import * as firebase from "firebase";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  @Input() user: firebase.User;
  // private userSubscription: any;
  newEmail: any;
  userForm: FormGroup;

  constructor() {

  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'email': new FormControl('xxx', [
        Validators.required,
        Validators.minLength(4),
      ])
    });
  }

  get email() {
    return this.userForm.get('email');
  }


  // ngOnDestroy(): void {
  //   if (this.userSubscription) {
  //     this.userSubscription.unsubscribe();
  //   }
  // }

}
