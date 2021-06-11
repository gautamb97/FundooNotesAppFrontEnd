import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-is-trashed',
  templateUrl: './is-trashed.component.html',
  styleUrls: ['./is-trashed.component.scss']
})
export class IsTrashedComponent implements OnInit {

  notes: any;
  data: any;
  error: any;
  message: any;
  constructor(private getNotes: UserService) { }

  ngOnInit(): void {
    this.submit()
  }

  submit() {
    this.getNotes.getNotes().subscribe(res => {
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
