import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UpdateNote } from '../update-note/update-note.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  constructor(private updateService: UserService,
              private snackBar: MatSnackBar) { }

  note = new UpdateNote()
  data: any
  message!: string
  error: any

  ngOnInit(): void {
  }

  submitForUpdate() {
    const token = localStorage.getItem('token')
    this.updateService.updateNote(this.note, token).subscribe(response => {
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
