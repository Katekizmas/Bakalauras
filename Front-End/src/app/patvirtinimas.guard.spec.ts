import { TestBed } from '@angular/core/testing';

import { PatvirtinimasGuard } from './patvirtinimas.guard';

describe('PatvirtinimasGuard', () => {
  let guard: PatvirtinimasGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PatvirtinimasGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
