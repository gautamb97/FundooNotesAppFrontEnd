import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';
import { User } from '../login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  user = new User();
  message: any
  data: any
  error: any
  token: any

  submit() {
    this.loginService.login(this.user).subscribe(response => {
      this.data = response
      this.message = this.data.message
      this.token = this.data.token
      localStorage.setItem('token', this.token)
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
