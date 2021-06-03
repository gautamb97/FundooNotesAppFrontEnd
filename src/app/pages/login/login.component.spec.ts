import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { TitleComponent } from '../../components/title/title.component';
import { By } from '@angular/platform-browser';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        LoginComponent,
        TitleComponent
      ],
      imports: [ 
        MatCardModule,
        MatFormFieldModule,
        RouterTestingModule,
        HttpClientTestingModule,
        MatSnackBarModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('givenTheForm_whenTested_shouldCreateForm', ()=> {
    expect(component.form.contains('username')).toBeTruthy();
  });

  it('givenTheForm_WhenTested_shouldCreateForm', () => {
    let control = component.form.get('username');
    control?.setValue('')
    expect(control?.valid).toBeFalsy()
  });

  it('givenTheForm_whenTested_shouldShowTitle', ()=> {
    const de = fixture.debugElement.query(By.css('app-title'));
    expect(de.nativeElement.textContent).toEqual('FundooNote');
  });
});
