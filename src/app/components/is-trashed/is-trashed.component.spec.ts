import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsTrashedComponent } from './is-trashed.component';

describe('IsTrashedComponent', () => {
  let component: IsTrashedComponent;
  let fixture: ComponentFixture<IsTrashedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsTrashedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsTrashedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
