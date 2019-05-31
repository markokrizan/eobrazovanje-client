import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRegistrationsComponent } from './exam-registrations.component';

describe('ExamRegistrationsComponent', () => {
  let component: ExamRegistrationsComponent;
  let fixture: ComponentFixture<ExamRegistrationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRegistrationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRegistrationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
