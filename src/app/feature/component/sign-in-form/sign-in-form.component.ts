import {Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {Theme} from "ngx-auth-firebaseui";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  @Input() user: firebase.User;
  themes = Theme;

  constructor() {
  }

  ngOnInit() {
  }
}
