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
    const token = localStorage.getItem('token')
    this.getService.getNotes(token).subscribe(res => {
      this.data = res
      this.notes = this.data.data
      this.notes = this.notes.reverse()
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }

  updateNote(noteId: any) {
    let dialogRef = this.dialog.open(UpdateNoteComponent)
    localStorage.setItem('noteId', noteId)
    dialogRef.afterClosed().subscribe(res => {
      console.log(res)
      this.submit()
      localStorage.removeItem('noteId')
    })
  }
}
