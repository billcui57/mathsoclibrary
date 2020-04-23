import { TestBed } from '@angular/core/testing';

import { LendsService } from './lends.service';

describe('LendsService', () => {
  let service: LendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
