import { TestBed } from '@angular/core/testing';

import { MrightsGuardGuard } from './mrights-guard.guard';

describe('MrightsGuardGuard', () => {
  let guard: MrightsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MrightsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
