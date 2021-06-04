import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from '../../services/user.service';
import { User } from '../login/login.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: UserService,
              private snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    username: new FormControl('', Validators.required)
  })

  user = new User();
  message: any
  data: any
  error: any
  token: any
  userData: any

  submit() {
    this.loginService.login(this.user).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.token = this.data.token
      localStorage.setItem('token', this.token)
      localStorage.setItem('email', this.data.data.email)
      localStorage.setItem('firstName', this.data.data.firstName)
      this.router.navigate(['/dashboard'])
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
