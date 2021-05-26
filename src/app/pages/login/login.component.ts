import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../../services/registration.service'
import { User } from '../login/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
  }

  user = new User();
  message: any
  data: any
  success: any
  error: any

  submit() {
    this.registrationService.login(this.user).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
    }, error => {
      console.log(error)
      this.error = error
      this.success = this.error.message
    })
  }
}
