import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'

import { HttpService } from './http.service';
import { environment } from '../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }
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
    const httpHeader = new HttpHeaders({
      'token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ind3dy5nYXV0YW05NzE5OTdAZ21haWwuY29tIiwiaWQiOiI2MDk3YTU1MjNmYTUwZDAxYTRhNTY0N2IiLCJpYXQiOjE2MjIxMjYyNTMsImV4cCI6MTYyMjIxMjY1M30.ox3zV14qREDP2jPfeesI64DB-qD4-zloTsKWFjEVCq8"
    })
    return this.httpService.postDataWithHeader(environment.URL + 'resetPassword', data, { headers: httpHeader })
  }

}
