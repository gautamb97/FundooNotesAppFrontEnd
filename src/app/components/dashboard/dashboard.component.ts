import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMenuOpen = false;
  contentMargin = 240;
  constructor() { }
  toggle() {
    this.isMenuOpen = !this.isMenuOpen
    if (!this.isMenuOpen) {
      return this.contentMargin = 50;
    } else {
      return this.contentMargin = 240;
    }
  }

  ngOnInit(): void {
  }

}
