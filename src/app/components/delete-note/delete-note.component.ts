import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from '../../services/user.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-delete-note',
  templateUrl: './delete-note.component.html',
  styleUrls: ['./delete-note.component.scss']
})
export class DeleteNoteComponent implements OnInit {

  constructor(private service: UserService,
              private snackBar: MatSnackBar,
              private interaction: InteractionService) { }

  data: any
  message: any
  error: any
  ngOnInit(): void {
  }

  deleteNote() {
    const token = localStorage.getItem('token')
    this.service.deleteNote(token).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
      this.interaction.sendContent('created note')
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}