import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AngularFireAuth} from "angularfire2/auth";
import * as firebase from "firebase";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  userForm: FormGroup;
  @Input() user: firebase.User;

  constructor(private afAuth: AngularFireAuth,
              private ref: ChangeDetectorRef) {

  }

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.error(event);
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
      // this.authorize();
    }
  }
/*
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
    this.state = AuthorizationState.SENT_EMAIL_VERIFICATION;
    this.afAuth.auth.sendSignInLinkToEmail(this.email.value, actionCodeSettings)
      .then(() => {
        this.state = AuthorizationState.SENT_EMAIL_VERIFICATION_SUCCEED;
        this.ref.detectChanges();
        console.log('SENT_EMAIL_VERIFICATION_SUCCEED');

        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem('emailForSignIn', self.email.value);
      })
      .catch((error) => {
        console.log(error);
        this.state = AuthorizationState.SENT_EMAIL_VERIFICATION_FAILED;

        // Some error occurred, you can inspect the code: error.code
      });
  }
*/
}
