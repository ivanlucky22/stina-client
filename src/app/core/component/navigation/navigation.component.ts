import {Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() user: firebase.User;

  constructor() {
  }

  ngOnInit() {
  }

  redirectToProfilePage() {

  }
}
