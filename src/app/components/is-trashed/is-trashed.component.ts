import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-is-trashed',
  templateUrl: './is-trashed.component.html',
  styleUrls: ['./is-trashed.component.scss']
})
export class IsTrashedComponent implements OnInit {

  notes: any;
  data: any;
  error: any;
  message: any;
  id: any
  constructor(private getNotes: UserService, 
              private removeUpdate: InteractionService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.submit()
    this.removeUpdate.removeNoteData$.subscribe(() => {
      this.submit()
    })
  }

  submit() {
    this.getNotes.getNotes().subscribe(res => {
      this.data = res
      this.notes = this.data.data
      this.notes = this.notes.reverse()
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }

  fetchNoteId(noteId: string) {
    this.id = noteId
  }

  removeNote() {
    console.log(this.id)
    this.getNotes.removeNote(this.id).subscribe(res => {
      console.log(res)
      this.data = res
      this.notes = this.data.data
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
      this.removeUpdate.removeContent('removed from db')
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }
}
