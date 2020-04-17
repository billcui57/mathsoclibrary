import { TestBed } from '@angular/core/testing';

import { TextbooksService } from './textbooks.service';

describe('TextbooksService', () => {
  let service: TextbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
