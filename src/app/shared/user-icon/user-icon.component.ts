import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-icon',
  templateUrl: './user-icon.component.html',
  styleUrls: ['./user-icon.component.less']
})
export class UserIconComponent implements OnInit {

  @Input() photoURL: string;
  @Input() userId: number;
  @Input() classes: string;
  @Input() userEmailVerified: boolean;

  constructor() { }

  ngOnInit() {
  }

}
