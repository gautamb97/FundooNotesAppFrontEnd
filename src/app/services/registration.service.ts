import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(public http: HttpClient) { }

  registerUser(data: any) {
    return this.http.post('http://localhost:3000/registration', data)
  }
}
