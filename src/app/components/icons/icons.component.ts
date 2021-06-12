import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() public id: any

  archiveStatus = false
  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.archiveStatus = !this.archiveStatus
  }
}
