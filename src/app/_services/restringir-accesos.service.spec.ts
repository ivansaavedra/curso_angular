import { TestBed } from '@angular/core/testing';

import { RestringirAccesosService } from './restringir-accesos.service';

import { RouterTestingModule } from '@angular/router/testing';

fdescribe('RestringirAccesosService', () => {
  let service: RestringirAccesosService;

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    });
    service = TestBed.inject(RestringirAccesosService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('token false', () => {
    service.canActivate(null,null);
    expect(JSON.parse(localStorage.getItem('token'))).toBeFalse();
  });
});
