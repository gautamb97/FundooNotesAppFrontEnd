import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post('http://localhost:3000/registration', data)
    //this.postData('http://localhost:3000/registration', data)
  }

  login(data: any) {
    return this.http.post('http://localhost:3000/login', data)
    //this.postData('http://localhost:3000/login', data)
  }

  // postData(data: any , url: any) {
  //   return this.http.post(data, url)
  // }
}
