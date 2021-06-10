import { Component, OnInit } from '@angular/core';
import { Note } from '../create-note/create-note.model';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  panelSize = false;
  constructor(private snackBar: MatSnackBar,
              private noteService: UserService,
              private interaction: InteractionService) { }

  note = new Note();

  ngOnInit(): void {
  }

  close() {
    return this.panelSize = !this.panelSize
  }
  message: any
  data: any
  error: any

  submit() {
    this.panelSize = !this.panelSize
    console.log(this.panelSize)
    this.noteService.createNote(this.note).subscribe(response => {
      console.log(response) 
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
      this.interaction.sendContent('created note')
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
