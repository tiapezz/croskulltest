import { TestBed } from '@angular/core/testing';

import { MHomeGuardGuard } from './mhome-guard.guard';

describe('MHomeGuardGuard', () => {
  let guard: MHomeGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MHomeGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
