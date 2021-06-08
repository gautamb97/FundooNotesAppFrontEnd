import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

import { UserService } from '../../services/user.service'

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
    private interaction: InteractionService) { }

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
}
