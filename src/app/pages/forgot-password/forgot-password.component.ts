import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';
import { User } from '../forgot-password/forgot-password.model';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fogotPasswordService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    username: new FormControl('', Validators.required)
  })
  user = new User();
  message: any
  data: any
  error: any

  submit() {
    this.fogotPasswordService.forgotPassword(this.user).subscribe(response => {
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
