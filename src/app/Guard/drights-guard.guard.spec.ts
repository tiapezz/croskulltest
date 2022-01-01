import { TestBed } from '@angular/core/testing';

import { DrightsGuardGuard } from './drights-guard.guard';

describe('DrightsGuardGuard', () => {
  let guard: DrightsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DrightsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
