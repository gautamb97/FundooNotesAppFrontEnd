import { Injectable } from '@angular/core';

import { HttpService } from './http.service';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  data: any
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
    return this.httpService.postDataUsingToken(environment.URL + 'resetPassword/:token', data, token)
  }

  createNote(data: any) {
    return this.httpService.postDataWithHeader(environment.URL + 'notes', data)
  }

  getNotes() {
    return this.httpService.getData(environment.URL + 'notes')
  }

  updateNote(data:any, noteId: any) {
    return this.httpService.putDataWithHeader(environment.URL + 'notes/'+ noteId, data)
  }

  archiveNote(noteId: any) {
    return this.httpService.putDataWithHeader(environment.URL + 'notes/archive/'+ noteId, this.data)
  }

  unArchiveNote(noteId: any) {
    return this.httpService.putDataWithHeader(environment.URL + 'notes/unarchive/'+ noteId, this.data)
  }

  restoreNote(noteId: any) {
    return this.httpService.putDataWithHeader(environment.URL + 'notes/restore/'+ noteId, this.data)
  }

  deleteNote(noteId: any) {
    return this.httpService.deleteData(environment.URL + 'notes/' + noteId)
  }

  removeNote(noteId: any) {
    return this.httpService.deleteData(environment.URL + 'note/' + noteId)
  }
}
