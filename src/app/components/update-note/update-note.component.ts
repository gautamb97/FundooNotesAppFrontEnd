import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UpdateNote } from '../update-note/update-note.model';
import { UserService } from '../../services/user.service';
import { InteractionService } from '../../services/interaction.service'

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  constructor(private updateService: UserService,
              private snackBar: MatSnackBar,
              private interaction: InteractionService) { }

  note = new UpdateNote()
  data: any
  message: any
  error: any

  ngOnInit(): void {
  }

  submit() {
    const token = localStorage.getItem('token')
    this.updateService.updateNote(this.note, token).subscribe(response => {
      console.log(response)
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
      this.interaction.sendContent('update note')
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.error
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
