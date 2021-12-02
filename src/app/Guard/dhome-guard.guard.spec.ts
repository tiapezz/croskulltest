import { TestBed } from '@angular/core/testing';

import { DHomeGuardGuard } from './dhome-guard.guard';

describe('DHomeGuardGuard', () => {
  let guard: DHomeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DHomeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
