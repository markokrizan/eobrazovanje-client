import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCancellationComponent } from './exam-cancellation.component';

describe('ExamCancellationComponent', () => {
  let component: ExamCancellationComponent;
  let fixture: ComponentFixture<ExamCancellationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCancellationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCancellationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
