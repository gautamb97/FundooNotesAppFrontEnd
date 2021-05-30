import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders } from '@angular/common/http'

import { HttpService } from './http.service';
import { environment } from '../../environments/environment';
//import { ResetPasswordComponent } from '../pages/reset-password/reset-password.component'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService, 
    //private reset: ResetPasswordComponent
    ) { }
  registerUser(data: any) {
    return this.httpService.postData(environment.URL + 'registration', data)
  }

  login(data: any) {
    return this.httpService.postData(environment.URL + 'login', data)
  }

  forgotPassword(data: any) {
    return this.httpService.postData(environment.URL + 'forgotPassword', data)
  }

  resetPassword(data: any) {
    const httpHeaders = new HttpHeaders({
        'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ind3dy5nYXV0YW05NzE5OTdAZ21haWwuY29tIiwiaWQiOiI2MDk3YTU1MjNmYTUwZDAxYTRhNTY0N2IiLCJpYXQiOjE2MjIyOTU0NzUsImV4cCI6MTYyMjM4MTg3NX0.opakZ4qOVVbiBgUms_q6osH6i_CEPvs8J-jYLXKGNz8'
    })
    console.log(httpHeaders);
    return this.httpService.postDataWithHeader(environment.URL + 'resetPassword/:token', data, {headers: httpHeaders})
  }

}
