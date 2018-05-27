import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";
import {TranslateService} from "@ngx-translate/core";

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  constructor(private translate: TranslateService) {

  }


  transform(timestamp: number, args?: any): any {


    const locale = this.translate.currentLang;
    console.log(locale);
    const toNow = moment(timestamp).locale(locale).fromNow();
    return toNow;
  }

}
