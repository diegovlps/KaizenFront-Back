import { TestBed } from '@angular/core/testing';

import { ListaempleosService } from './listaempleos.service';

describe('ListaempleosService', () => {
  let service: ListaempleosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaempleosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
