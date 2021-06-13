import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-is-archived',
  templateUrl: './is-archived.component.html',
  styleUrls: ['./is-archived.component.scss']
})
export class IsArchivedComponent implements OnInit {

  notes: any
  data: any
  error: any
  message: any
  id: any
  constructor(private service: UserService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.submit()
  }

  submit() {
    this.service.getNotes().subscribe(res => {
      this.data = res
      this.notes = this.data.data
      this.notes = this.notes.reverse()
    }, error => {
      console.log(error)
      this.error = error.error.err
      this.message = this.error
    })
  }

  fetchNoteId(noteId: string) {
    this.id = noteId
  }

  archiveNote() {
    this.service.archiveNote(this.id).subscribe(response => {
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