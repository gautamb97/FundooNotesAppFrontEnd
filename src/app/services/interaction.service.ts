import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private interactionSource = new Subject<string>()
  createNoteData$ = this.interactionSource.asObservable()
  constructor() { }

  sendContent(message: string){
    this.interactionSource.next(message)
  }
}
