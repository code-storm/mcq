import { TestBed, async, inject } from '@angular/core/testing';

import { IsuserconnectedGuard } from './isuserconnected.guard';

describe('IsuserconnectedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsuserconnectedGuard]
    });
  });

  it('should ...', inject([IsuserconnectedGuard], (guard: IsuserconnectedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
