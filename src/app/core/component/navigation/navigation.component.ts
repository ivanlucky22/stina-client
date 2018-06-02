import {Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @Input() user: firebase.User;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  redirectToProfilePage() {
    this.router.navigateByUrl('users/0');
  }
}
