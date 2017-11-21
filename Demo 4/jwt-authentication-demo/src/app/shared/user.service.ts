import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { AuthenticationService } from "./authentication.service";
import { Constant } from '../shared/constant';

@Injectable()
export class UserService {

  constructor(private http: Http, private auhenticationService: AuthenticationService) { }

  getGreeting(): Observable<string> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.auhenticationService.token });
    let options = new RequestOptions({ headers: headers });

    return this.http.
      get(Constant.ApiRoot + Constant.GreetingService, options).
      map((response: Response) => response.text());
  }
}
