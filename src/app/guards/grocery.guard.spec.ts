import { TestBed } from '@angular/core/testing';

import { GroceryGuard } from './grocery.guard';

describe('GroceryGuard', () => {
  let guard: GroceryGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GroceryGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
