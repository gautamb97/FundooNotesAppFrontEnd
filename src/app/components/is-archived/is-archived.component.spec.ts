import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsArchivedComponent } from './is-archived.component';

describe('IsArchivedComponent', () => {
  let component: IsArchivedComponent;
  let fixture: ComponentFixture<IsArchivedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsArchivedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsArchivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
