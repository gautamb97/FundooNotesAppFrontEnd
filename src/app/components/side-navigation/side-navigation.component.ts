import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() toggle : any
  contentMargin = 240

  displayNotes(){
    this.route.navigate(['dashboard/notes'])
  }

  trashedNotes(){
    this.route.navigate(['dashboard/trash'])
  }

  archiveNotes(){
    this.route.navigate(['dashboard/archive'])
  }

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
}
