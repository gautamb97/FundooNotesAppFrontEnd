import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UserService } from 'src/app/services/user.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {

  @Input() public id: any
  constructor(private service: UserService,
              private interaction: InteractionService,
              private snackBar: MatSnackBar) { }

  archiveStatus = false
  data: any
  message: any
  error: any
  ngOnInit(): void {
  }

  toggle() {
    this.archiveStatus = !this.archiveStatus
  }

  archiveNote() {
    this.service.archiveNote(this.id).subscribe(response => {
      this.data = response
      this.message = this.data.message
      this.snackBar.open(this.message, '', { duration: 2000 })
    }, error => {
      console.log(error)
      this.error = error
      this.message = this.error.error.err
      this.snackBar.open(this.message, '', { duration: 2000 })
    })
  }
}
