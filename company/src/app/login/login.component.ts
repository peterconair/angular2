import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  isSigned: boolean = false;
  isError: boolean = false;
  errorMessage: string;

  profile: any;

  constructor(private loginSerive: LoginService) { }

  ngOnInit() {
    let profile = localStorage.getItem('profile');
    if (profile) {
      this.isSigned = true;
      this.profile = JSON.parse(profile);
    }
  }

  login(loginForm: any) {
    console.log(loginForm);
    this.loginSerive.login(loginForm.username, loginForm.password)
      .subscribe(result => {
        if (result == true) {
          this.isSigned = true;
          this.isError = false;

          // Get user profile 
          this.loginSerive.getProfile().subscribe(profile => this.profile = profile)
          console.log("Login OK");
        }
      },
      error => {
        console.log(this.errorMessage);
        this.errorMessage = <any>error;
      });
  }

  logout() {
    console.log("Logout");
    this.loginSerive.logout();
    this.isSigned = false;
  }

}
