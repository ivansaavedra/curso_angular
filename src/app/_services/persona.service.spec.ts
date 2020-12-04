import { TestBed } from '@angular/core/testing';

import { PersonaService } from './persona.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('PersonaService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(PersonaService);
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });
});
