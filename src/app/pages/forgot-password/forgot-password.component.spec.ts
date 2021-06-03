import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';

import { ForgotPasswordComponent } from './forgot-password.component';
import { TitleComponent } from '../../components/title/title.component'

describe('ForgotPasswordComponent', () => {
  let component: ForgotPasswordComponent;
  let fixture: ComponentFixture<ForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotPasswordComponent, TitleComponent ],
      imports: [
          MatIconModule,
          HttpClientTestingModule,
          MatInputModule,
          MatSnackBarModule,
          BrowserAnimationsModule,
          FormsModule,
          MatCardModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('givenTheForm_whenTested_shouldShowTitle', ()=> {
    const de = fixture.debugElement.query(By.css('app-title'));
    expect(de.nativeElement.textContent).toEqual('FundooNote');
  });

  it('givenTheForm_whenTested_shouldCreateForgotForm', ()=> {
    expect(component.form.contains('username')).toBeTruthy();
  });

  it('givenTheForm_WhenTested_shouldCreateFogotForm', () => {
    let control = component.form.get('username');
    control?.setValue('')
    expect(control?.valid).toBeFalsy()
  });
});
