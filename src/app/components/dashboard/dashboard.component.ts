import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  isMenuOpen = false;
  //storing firstName of user in localStorage
  firstName = localStorage.getItem('firstName')
  //storing email of user in localStorage
  email = localStorage.getItem('email')

  constructor() { }

  /**
   * @description : It helps to change the side navigation
   * @return      : reasign isMenuOpen value
  */
  toggle(){
    this.isMenuOpen = !this.isMenuOpen
  }

  ngOnInit(): void {
  }

}
