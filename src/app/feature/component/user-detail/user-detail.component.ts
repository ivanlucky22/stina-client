import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit {

  @Input() user: firebase.User;
  newPassword: string = '**********';

  ngOnInit(): void {
  }


}
