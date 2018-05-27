import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import * as moment from "moment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ru');
    translate.use('ru');
    this.addUkrainianMomentLocale();
  }

  private addUkrainianMomentLocale() {
    moment.defineLocale('ua', {
      parentLocale: 'ru',
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
}
