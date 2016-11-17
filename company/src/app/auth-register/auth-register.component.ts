
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

import {Router} from '@angular/router';


import { AuthRegisterService } from './auth-register.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css'],
  providers: [AuthRegisterService]
})
export class AuthRegisterComponent implements OnInit {
  isLoading: boolean = false;
  isError: boolean = false;
  errorMessage: any;


  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private formBuilder: FormBuilder, private authRegisterService: AuthRegisterService , private router :Router) {

    // Initial form values for Form Control 
    this.email = formBuilder.control('', Validators.compose([
      Validators.required,
      AuthRegisterComponent.emailValidator,
      AuthRegisterComponent.adminValidator
    ]));
    this.password = formBuilder.control('', Validators.compose([
      Validators.required, Validators.minLength(3)
    ]));

    // Mapping form controlName in html
    this.registerForm = formBuilder.group({
      'email': this.email,
      'password': this.password
    });
  }

  ngOnInit() {
  }

  register(event) {
    this.isLoading = true;
    console.log("do");
    console.log(this.registerForm.value);
    console.log('email : ' + this.email.value);
    console.log('password : ' + this.password.value);
    this.authRegisterService
      .register(this.email.value, this.password.value)
      .subscribe(result => {
        if (result == true) {
          this.isLoading = false;
          console.log("Insert Ok");
          this.router.navigate(['/']);
          
        } else {
          this.isLoading = false;
            console.log("Not Ok");
        }
      }
      , error => {
        this.errorMessage = <any>error;
        this.isLoading = false;
        this.isError = true;
        console.log(error);
      }
      );
    //  event.preventDefault();


  }

  static emailValidator(control: FormControl) {
    let EMAIL_REGEXP: any = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return EMAIL_REGEXP.test(control.value) ? null : { invalidEmail: true };
  }

  static adminValidator(control: FormControl) {
    return control.value !== 'admin@gmail.com' ? null : { notAllowed: true };
  }

}
