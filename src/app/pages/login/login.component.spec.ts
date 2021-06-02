import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [ 
        MatCardModule,
        MatFormFieldModule       
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('givenEmail_whenCorrect_shouldPass', () =>{
  //   let email = component.user.email;
  //   email.setValue('www.gautam971997@gmail.com')
  //   expect(email.errors).toBeNull();
  // });
});
