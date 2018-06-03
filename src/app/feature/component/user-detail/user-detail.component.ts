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

  constructor(public afAuth: AngularFireAuth) {

  }

  ngOnInit() {
    this.userForm = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(4),
      ])
    });
    this.listenAuthorization();
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
      url: 'http://localhost:4200/finishSignUp?cartId=' + this.user.uid,
      // This must be true.
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.example.ios'
      },
      android: {
        packageName: 'com.example.android',
        installApp: true,
        minimumVersion: '12'
      }
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

  private listenAuthorization() {
    // Confirm the link is a sign-in with email link.
    if (this.afAuth.auth.isSignInWithEmailLink(window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem('emailForSignIn');
      console.log('isSignInWithEmailLink ' + email);
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('Please provide your email for confirmation');
      }
      // The client SDK will parse the code from the link for you.
      this.afAuth.auth.signInWithEmailLink(email, window.location.href)
        .then(function (result) {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
          console.log('signInWithEmailLink ' + result);

          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
        })
        .catch(function (error) {
          console.log('Error signInWithEmailLink ' + error);

          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        });
    }
  }
}
