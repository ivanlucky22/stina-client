import {Injectable} from '@angular/core';
import {AuthService} from "@app/core/service/auth/auth.service";

@Injectable()
export class UserService {

  constructor(private authService: AuthService) {
  }

  signInAnonymously() {
    this.authService.signInAnonymously();
  }

}
