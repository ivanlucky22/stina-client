import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit {

  @Input() user: firebase.User;
  @Input() targetUser: firebase.User;

  constructor(private ref: ChangeDetectorRef) {

  }

  ngOnInit(): void {
  }

  printUser(event) {
    console.log('successfully signed up' + event);
  }

  printError() {
    console.log('failed to do smth');
  }
}
