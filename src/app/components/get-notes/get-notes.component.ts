import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InteractionService } from 'src/app/services/interaction.service';

import { UserService } from '../../services/user.service';
import { UpdateNoteComponent } from '../update-note/update-note.component'

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  data: any;
  notes: any;
  error: any;
  message: any;
  id: any
  constructor(private getService: UserService,
             private interaction: InteractionService,
             private dialog: MatDialog) {  }

  ngOnInit(): void {
    this.submit()
    this.interaction.createNoteData$.subscribe(() => {
      this.submit()
    })
    this.interaction.deleteNoteData$.subscribe(() => {
      this.submit()
    })

  }

  /**
   * @description : It fetch all notes which are existing in db
   * @method      : getNotes from UserService
  */
  submit() {
    this.getService.getNotes().subscribe(res => {
      this.data = res
      this.notes = this.data.data
      this.notes = this.notes.reverse()
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }

  /**
   * @description : It is used to Update an existing note of fundooNote for that it uses dialogbox
   * @method      : submit which is for get all notes after updating note
  */
  updateNote(noteData: any) {
    let dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '38%',
      height: '22%',
      data: { noteData }
    })
    dialogRef.afterClosed().subscribe(() => {
      this.submit()
    })
  }
  
  /**
   * @description : It fecthes NoteId from the array
  */
  fetchNoteId(noteId: string) {
    this.id = noteId
  }
}
