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

  data: any
  message!: string
  error: any
  noteId: any
  constructor(private updateService: UserService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public dialogData: any
              ) { }

  note = new UpdateNote()

  ngOnInit(): void {
  }

  /**
   * @description : It uses to update an existing note and taking noteId from the dialog box data
   * @method      : update from UserService
  */
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
