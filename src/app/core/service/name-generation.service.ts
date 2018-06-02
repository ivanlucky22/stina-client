
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "@app/core/service/http.service";


@Injectable()
export class NameGenerationService {

  constructor(private http: HttpService) {
  }

  getNewUserName(): Observable<any> {
    const result: Observable<any> = this.http.get('https://randomuser.me/api/');
    return result.pipe(map((json: any) => json.results[0].login.username));
  }

}

