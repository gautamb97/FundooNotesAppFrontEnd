import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RegistrationService } from '../../services/registration.service';
import { User } from '../registration/registration.model'

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

  firstName = new FormControl('', Validators.required);
  getError() {
    return (this.firstName.hasError('required')) ? 'You must enter a value' : 'Must conatin three letters and only alphabets allowed';
  }

  lastName = new FormControl('', Validators.required);
  errorMessage() {
    return (this.lastName.hasError('required')) ? 'You must enter a value' : 'Must conatin three letters and only alphabets allowed';
  }

  password = new FormControl('', Validators.required);
  passwordErrorMessage() {
    return (this.password.hasError('required')) ? 'You must enter a value' : 'Must have One Capital, one small latter and one number and a symbol';
  }
  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  user = new User();
  message: any
  data: any
  success: any
  error: any

  submit() {
    this.registrationService.registerUser(this.user).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
    }, error => {
      this.error = error
      this.success = this.error.message
    })
  }

}
