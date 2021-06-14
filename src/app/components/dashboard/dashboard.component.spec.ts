import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from  '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import { DashboardComponent } from './dashboard.component';
import { TitleComponent } from '../title/title.component';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { SearchComponent } from '../search/search.component'
import { MatMenuModule } from '@angular/material/menu';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        DashboardComponent, 
        TitleComponent,
        SideNavigationComponent,
        SearchComponent
      ],
      imports: [
        MatIconModule,
        MatCardModule,
        MatSidenavModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        MatMenuModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check the title name', ()=> {
    const title = fixture.debugElement.query(By.css('app-title'));
    expect(title.nativeElement.textContent).toEqual('FundooNote');
  });

  it('side menu property', () => {
    expect(component.isMenuOpen).toBe(false)
  });
});
