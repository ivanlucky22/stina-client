import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import * as firebase from "firebase";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "angularfire2/auth";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailComponent implements OnInit {

  @Input() user: firebase.User;
  userForm: FormGroup;

  constructor(private afAuth: AngularFireAuth) {

  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(4),
      ])
    });
  }

  get email() {
    return this.userForm.get('email');
  }

  validateAndAuthorize() {
    if (this.userForm.valid) {
      this.authorize();
    }
  }

  private authorize() {
    const self = this;
    const actionCodeSettings = {
      // URL you want to redirect back to. The domain (www.example.com) for this
      // URL must be whitelisted in the Firebase Console.
      url: 'https://stina-2b904.firebaseapp.com/verification',
      // This must be true.
      handleCodeInApp: true,
      androidInstallApp: false
      // iOS: {
      //   bundleId: 'https://stina-2b904.firebaseapp.com'
      // },
      // android: {
      //   packageName: 'https://stina-2b904.firebaseapp.com',
      //   installApp: true,
      //   minimumVersion: '12'
      // }
    };

    this.afAuth.auth.sendSignInLinkToEmail(this.email.value, actionCodeSettings)
      .then(function () {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', self.email.value);
      })
      .catch(function (error) {
        // Some error occurred, you can inspect the code: error.code
      });
  }

}
