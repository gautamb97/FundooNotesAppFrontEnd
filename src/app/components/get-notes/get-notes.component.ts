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
  constructor(private getService: UserService,
             private interaction: InteractionService,
             private dialog: MatDialog) {  }

  ngOnInit(): void {
    this.submit()
    this.interaction.createNoteData$.subscribe(() => {
      this.submit()
    })
  }

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

  updateNote(noteData: any) {
    console.log(noteData)
    let dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '38%',
      height: '22%',
      data: { noteData }
    })
    dialogRef.afterClosed().subscribe(() => {
      this.submit()
    })
  }
  
  fetchNoteId(noteId: string) {
    localStorage.setItem('noteId', noteId)
  }
}
