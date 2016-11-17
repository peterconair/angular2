import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthRegisterService {

  signupUrl: string = 'https://peterconair.auth0.com/dbconnections/signup';
  constructor(private http: Http) {}

  register(email: string, password: string) {

    console.log('do register ');
    console.log('email : ' +email);
     console.log('password : ' +password);
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    let body = {
      'client_id': '6mjk5sRVar4eu4qOBdqLnDwL7W2cyDX1',
      'email': email,
      'password': password,
      'connection': 'Username-Password-Authentication',
    }
    return this.http.post(this.signupUrl, body, { headers: header })
      .map((res: Response) => {
        let data = res.json();
        if (data) {
          return true;
        } else {
          return false;
        }
      }).catch(this.handleError);

  }

  private handleError(error: any) {
    return Observable.throw(error.json() || 'Server error');
  }

}
