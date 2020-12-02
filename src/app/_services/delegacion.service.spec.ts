import { TestBed } from '@angular/core/testing';

import { DelegacionService } from './delegacion.service';

describe('DelegacionService', () => {
  let service: DelegacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DelegacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
