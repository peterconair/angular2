import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.component.html',
  styleUrls: ['./register3.component.css']
})
export class Register3Component implements OnInit {

  registerForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private formBuilder: FormBuilder) {

    // Initial form values for Form Control 
    this.email = formBuilder.control('', Validators.compose([
      Validators.required,
      Register3Component.emailValidator,
      Register3Component.adminValidator
    ]));
    this.password = formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(3)]));

    // Mapping form controlName in html
    this.registerForm = formBuilder.group({
      'email': this.email,
      'password': this.password
    });
  }

  ngOnInit() {
  }

  register() {
    console.log("do");
    console.log(this.registerForm.value);
    console.log('Email : ' + this.email.value);
    console.log('Password : ' + this.password.value);
  }

  static emailValidator(control: FormControl) {
    let EMAIL_REGEXP: any = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return EMAIL_REGEXP.test(control.value) ? null : { invalidEmail: true };
  }

  static adminValidator(control: FormControl) {
    return control.value !== 'admin@gmail.com' ? null : { notAllowed: true };
  }
}
