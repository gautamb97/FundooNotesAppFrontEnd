import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { UpdateNote } from '../update-note/update-note.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  constructor(private updateService: UserService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public dialogData: any
              ) { }

  note = new UpdateNote()
  data: any
  message!: string
  error: any
  noteId: any

  ngOnInit(): void {
  }

  submitForUpdate() {
    this.noteId = this.dialogData.noteData._id
    this.updateService.updateNote(this.note, this.noteId).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
