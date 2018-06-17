import * as firebase from "firebase";

export class AuthorUser {
  displayName: string | null;
  photoURL: string | null;
  creationTime: string;
  uid: string;

  constructor(user: firebase.User) {
    if (user) {
      this.displayName = user.displayName;
      this.photoURL = user.photoURL;
      this.creationTime = user.metadata.creationTime;
      this.uid = user.uid;
    }
  }
}
