import { TestBed } from '@angular/core/testing';

import { IfscService } from './ifsc.service';

describe('IfscService', () => {
  let service: IfscService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfscService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
