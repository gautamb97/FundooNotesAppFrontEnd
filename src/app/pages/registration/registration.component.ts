import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value'
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  name = new FormControl('', Validators.required);
  getError() {
    return (this.name.hasError('required')) ? 'You must enter a value' : 'Must conatin three letters and only alphabets allowed';
  }

  lastName = new FormControl('', Validators.required);
  errorMessage() {
    return (this.lastName.hasError('required')) ? 'You must enter a value' : 'Must conatin three letters and only alphabets allowed';
  }

  password = new FormControl('', Validators.required);
  passwordErrorMessage() {
    return (this.password.hasError('required')) ? 'You must enter a value' : 'Must have One Capital, one small latter and one number and a symbol';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
