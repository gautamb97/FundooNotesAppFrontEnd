import { Component, OnInit } from '@angular/core';
import { Note } from '../create-note/create-note.model';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  panelSize = false;
  constructor(private snackBar: MatSnackBar,
              private noteService: UserService) { }

  note = new Note();

  ngOnInit(): void {
  }

  close() {
    console.log(this.panelSize)
    return this.panelSize = !this.panelSize
  }
  message: any
  data: any
  error: any

  submit() {
    this.panelSize = !this.panelSize
    console.log(this.panelSize)
    const token = localStorage.getItem('token')
    this.noteService.createNote(this.note, token).subscribe(response => {
      console.log(response) 
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
