import { TestBed } from '@angular/core/testing';

import { ErrorHandlingService } from './error-handling.service';

describe('ErrorHandlingService', () => {
  let service: ErrorHandlingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErrorHandlingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the correct error codes', () => {
    expect(service.httpErrorHandle(401, "talent")).toBe()
  })
});
