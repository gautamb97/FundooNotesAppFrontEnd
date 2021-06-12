import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private interactionSource = new Subject<string>()
  createNoteData$ = this.interactionSource.asObservable()

  private interactionSource2 = new Subject<string>()
  removeNoteData$ = this.interactionSource2.asObservable()

  private interactionSource1 = new Subject<string>()
  deleteNoteData$ = this.interactionSource1.asObservable()
  constructor() { }

  sendContent(message: string){
    this.interactionSource.next(message)
  }

  deleteContent(message: string){
    this.interactionSource.next(message)
  }

  removeContent(message: string){
    this.interactionSource2.next(message)
  }
}
