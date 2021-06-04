import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMenuOpen = false;

  firstName = localStorage.getItem('firstName')
  email = localStorage.getItem('email')
  constructor() { }

  toggle(){
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit(): void {
  }

}
