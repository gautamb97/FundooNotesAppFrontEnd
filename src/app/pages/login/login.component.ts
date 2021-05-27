import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { RegistrationService } from '../../services/registration.service';
import { User } from '../login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private registrationService: RegistrationService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  user = new User();
  message: any
  data: any
  error: any

  submit() {
    this.registrationService.login(this.user).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
