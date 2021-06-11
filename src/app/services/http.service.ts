import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  token: any = localStorage.getItem('token')

  httpHeaders = new HttpHeaders({ 
    'token': this.token
  })
  constructor(private http: HttpClient) { }

  postData(data: any , url: any) {
       return this.http.post(data, url)
     }

  postDataWithHeader(data: any, url: any) {
    return this.http.post(data, url, {headers: this.httpHeaders})
  }

  putDataWithHeader(data: any, url: any) {
    return this.http.put(data, url, {headers: this.httpHeaders})
  }

  deleteData(url: any) {
    return this.http.delete(url, {headers: this.httpHeaders})
  }

  getData(url: any) {
    return this.http.get(url, {headers: this.httpHeaders})
  }

  postDataUsingToken(data: any, url: any, token: any) {
    const httpHeaders = new HttpHeaders({ 
      'token': token.token
  })
    return this.http.post(data, url, {headers: httpHeaders})
  }
}
