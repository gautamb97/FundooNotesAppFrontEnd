import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  isMenuOpen = false;
  contentMargin = 240;
  constructor() { }

  onToolBarToggle() {
    this.isMenuOpen = !this.isMenuOpen
    if (!this.isMenuOpen) {
      this.contentMargin = 50;
    } else {
      this.contentMargin = 240;
    }
  }

  ngOnInit(): void {
  }

}
