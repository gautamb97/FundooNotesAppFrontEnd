import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { RegistrationComponent } from './registration.component';

describe('RegistrationComponent', () => {
  let component: RegistrationComponent;
  let fixture: ComponentFixture<RegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrationComponent ], 
      imports: [ MatIconModule, FormsModule, ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  // it('form should be invalid', ()=> {
  //   component.contactForm.controls['firstName'].setValue('');
  //   component.contactForm.controls['lastName'].setValue('');
  //   component.contactForm.controls['email'].setValue('');
  //   component.contactForm.controls['password'].setValue('');
  //   expect(component.contactForm.valid).toBeFalsy()
  // });
});
