import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpService} from "@app/core/service/http.service";

@Injectable()
export class NameGenerationService {

  constructor(private http: HttpService) {
  }

  getNewUserName(): Observable<any> {
    const result = this.http.get('https://randomuser.me/api/');
    return result.map((json: any) => json.results[0].login.username);
  }

}

