import {Component, OnInit} from '@angular/core';
import {UserService} from "@app/core/service/auth/user.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.signInAnonymously();
  }

}
