import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'

import { HttpService } from './http.service';
import { environment } from '../../environments/environment';


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

  resetPassword(data: any, token: any) {
    const httpHeaders = new HttpHeaders({
        'token': token.token
    })
    return this.httpService.postDataWithHeader(environment.URL + 'resetPassword/:token', data, {headers: httpHeaders})
  }

}
