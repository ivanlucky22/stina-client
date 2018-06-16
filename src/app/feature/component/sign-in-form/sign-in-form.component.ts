import {Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "@app/core/service/auth/user.service";
import {Theme} from "ngx-auth-firebaseui";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  @Input() user: firebase.User;
  userForm: FormGroup;
  themes = Theme;
  constructor(private userService: UserService) {
  }

  ngOnInit() {

    this.userForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(4),
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  validateAndAuthorize() {
    if (this.userForm.valid) {
      this.authorize();
    }
  }

  private authorize() {
    this.userService.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(() => {
        this.email.clearValidators();
        this.password.clearValidators();
      })
      .catch(function (error) {
        // Handle Errors here.
        console.log(error.code);
        console.log(error.message);
        // ...
      });
  }
}
