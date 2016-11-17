import { Injectable } from '@angular/core';

import {Router ,CanActivate} from '@angular/router';


@Injectable()
export class AuthGaurdService implements CanActivate{

  constructor(private router :Router) { }

  canActivate(){
    let profile = localStorage.getItem('profile');
    if(profile){
      return true;
    }else{
      this.router.navigate(['/']);
      return false;
    }
  }

}
