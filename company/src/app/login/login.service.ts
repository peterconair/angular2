import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class LoginService {

  signinUrl: string = 'https://peterconair.auth0.com/oauth/ro';
  profileUrl: string = 'https://peterconair.auth0.com/tokeninfo';
  token: string;

  profile: any;

  constructor(private http: Http) { }


  login(userName: string, password: string) {
    console.log('username : ' + userName);
    console.log('password : ' + password);
    let header = new Headers();
    header.append('Content-Type', 'application/json');

    let body = {
      'client_id': '6mjk5sRVar4eu4qOBdqLnDwL7W2cyDX1',
      'username': userName,
      'password': password,
      'connection': 'Username-Password-Authentication',
      'grant_type': 'password',
      'scope': 'openid name email',

    }
    return this.http.post(this.signinUrl, body, { headers: header })
      .map((res: Response) => {
        let token = res.json().id_token;
        if (token) {
          this.token = token;
          // Keep value in local storage. 
          localStorage.setItem('token', token);
          return true;
        } else {
          return false;
        }
      }).catch(this.handleError);
  }

  logout() {
    // Remove value in local storage. 
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }

  getProfile() {
    let id_token = localStorage.getItem('token');

    let header = new Headers();
    header.append('Content-Type', 'application/json');
    let body = {
      'id_token': id_token
    }

    return this.http.post(this.profileUrl, body, { headers: header })
      .map((res: Response) => {
        let profile = res.json();
        if (profile) {
          // keep profile object for show profile in other pages and transform to json format. 
          localStorage.setItem('profile', JSON.stringify(profile));
          console.log(profile);
          return this.profile = profile;
        }else{

        }
      }).catch(this.handleError);
  }


  private handleError(error: any) {
    return Observable.throw(error.json().error_description || 'Server error');
  }

}
