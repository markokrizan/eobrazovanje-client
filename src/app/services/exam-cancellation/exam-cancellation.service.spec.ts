import { TestBed } from '@angular/core/testing';

import { ExamCancellationService } from './exam-cancellation.service';

describe('ExamCancellationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamCancellationService = TestBed.get(ExamCancellationService);
    expect(service).toBeTruthy();
  });
});
