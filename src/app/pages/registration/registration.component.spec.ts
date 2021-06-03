import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing'

import { RegistrationComponent } from './registration.component';
import { TitleComponent } from '../../components/title/title.component';
import { By } from '@angular/platform-browser';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent, TitleComponent ], 
      imports: [ 
        MatIconModule, 
        FormsModule, 
        ReactiveFormsModule, 
        HttpClientTestingModule,
        MatSnackBarModule,
        MatInputModule,
        MatCardModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldShow_descriptionFor_RegistrationPage_in_h3_tag', () => {
    const de = fixture.debugElement.query(By.css('h3'));
    expect(de.nativeElement.textContent).toEqual('Create your fundooNote account');
  });

  it('givenTheForm_whenTested_shouldShowTitle', ()=> {
    const de = fixture.debugElement.query(By.css('app-title'));
    expect(de.nativeElement.textContent).toEqual('FundooNote');
  });
  
});
