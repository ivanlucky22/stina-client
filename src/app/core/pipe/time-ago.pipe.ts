import {Pipe, PipeTransform} from '@angular/core';
import * as moment from "moment";

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {


  transform(timestamp: number, locale: any): any {
    if (locale) {
      return moment(timestamp).locale(locale).fromNow();
    }
    return moment(timestamp).locale('ru').fromNow();
  }

}
