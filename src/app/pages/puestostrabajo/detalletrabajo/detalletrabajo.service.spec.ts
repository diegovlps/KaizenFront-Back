import { TestBed } from '@angular/core/testing';

import { DetalletrabajoService } from './detalletrabajo.service';

describe('DetalletrabajoService', () => {
  let service: DetalletrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalletrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
