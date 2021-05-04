import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalletrabajoComponent } from './detalletrabajo.component';

describe('DetalletrabajoComponent', () => {
  let component: DetalletrabajoComponent;
  let fixture: ComponentFixture<DetalletrabajoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalletrabajoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalletrabajoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
