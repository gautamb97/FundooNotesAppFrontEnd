import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';
import { ResetPasswordData } from '../reset-password/reset-password.model'


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private resetPasswordService: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  resetData = new ResetPasswordData();
  message: any
  data: any
  error: any

  submit() {
    this.resetPasswordService.resetPassword(this.resetData).subscribe(response => {
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
