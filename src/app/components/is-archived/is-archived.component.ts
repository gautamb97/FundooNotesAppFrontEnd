import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-is-archived',
  templateUrl: './is-archived.component.html',
  styleUrls: ['./is-archived.component.scss']
})
export class IsArchivedComponent implements OnInit {

  notes: any
  data: any
  error: any
  message: any
  id: any
  constructor(private service: UserService,
              private snackBar: MatSnackBar,
              private interaction: InteractionService) { }

  ngOnInit(): void {
    this.submit()
    this.interaction.createNoteData$.subscribe(() => {
      this.submit()
    })
  }

  /**
   * @description : It fetch all notes which are existing in db
   * @method      : getNotes from UserService
  */
  submit() {
    this.service.getNotes().subscribe(res => {
      this.data = res
      this.notes = this.data.data
      this.notes = this.notes.reverse()
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }

  //fetch noteId from the array of notes
  fetchNoteId(noteId: string) {
    this.id = noteId
  }

  /**
   * @description : It uses to unarchive a note which is present inside the archive section of fundooNotes
   * @method      : unarchiveNote from UserService
  */
  unArchiveNote() {
    console.log(this.id)
    this.service.unArchiveNote(this.id).subscribe(res => {
      console.log(res)
      this.data = res
      this.notes = this.data.data
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
      this.interaction.sendContent('unarchive note')
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }

}
