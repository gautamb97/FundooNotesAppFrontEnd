import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-get-notes',
  templateUrl: './get-notes.component.html',
  styleUrls: ['./get-notes.component.scss']
})
export class GetNotesComponent implements OnInit {

  data: any;
  notes: any;
  constructor(private getService: UserService) { }

  ngOnInit(): void {
    this.submit()
  }

  submit() {
    const token = localStorage.getItem('token')
    this.getService.getNotes(token).subscribe(res => {
      this.data = res
      this.notes = this.data.data
    })
  }
}
