import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postData(data: any , url: any) {
       return this.http.post(data, url)
     }

  postDataWithHeader(data: any, url: any, token: any) {
    return this.http.post(data, url, token)
  }

  putDataWithHeader(data: any, url: any, token: any) {
    return this.http.put(data, url, token)
  }

  deleteDataWithHeader(url: any, token: any) {
    return this.http.delete(url, token)
  }

  getData(url: any, token: any) {
    return this.http.get(url, token)
  }
}
