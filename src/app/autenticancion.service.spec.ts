import { TestBed } from '@angular/core/testing';

import { AutenticancionService } from './autenticancion.service';

describe('AutenticancionService', () => {
  let service: AutenticancionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticancionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
