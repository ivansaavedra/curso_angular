import { TestBed } from '@angular/core/testing';

import { RestringirAccesosService } from './restringir-accesos.service';

describe('RestringirAccesosService', () => {
  let service: RestringirAccesosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestringirAccesosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
