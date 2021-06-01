import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.scss']
})
export class SideNavigationComponent implements OnInit {

  @Input() 
  toggle: any;

  isMenuOpen = false;
  contentMargin = 240;
  constructor() { }

  ngOnInit(): void {
  }

}
