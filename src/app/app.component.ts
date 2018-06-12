import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import * as moment from "moment";
import {UserService} from "@app/core/service/auth/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  DEFAULT_LANG = 'ru';

  constructor(private translate: TranslateService,
              private userService: UserService) {
    translate.setDefaultLang(this.DEFAULT_LANG);
    translate.use(this.DEFAULT_LANG);
    this.addUkrainianMomentLocale();
  }

  private addUkrainianMomentLocale() {
    moment.defineLocale('ua', {
      parentLocale: this.DEFAULT_LANG,
    });
    moment.updateLocale('ua', {
      relativeTime: {
        future: "через %s",
        past: "%s тому",
        s: 'декілька секунд тому',
        ss: '%d секунд',
        m: "хвилина",
        mm: "%d хвилин",
        h: "година",
        hh: "%d годин",
        d: "день",
        dd: "%d днів",
        M: "місяць",
        MM: "%d місяців",
        y: "рік",
        yy: "%d років"
      }
    });
  }

  ngOnInit(): void {
    this.userService.authState().subscribe(user => {
      if (!user) {
        console.log('User signed out');
        console.log('Signing in anonymously');
        this.userService.signInAnonymously();
      } else {
        console.log('User exists');
      }
    });
  }

}
