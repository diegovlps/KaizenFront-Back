import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaempleosComponent } from './listaempleos.component';

describe('ListaempleosComponent', () => {
  let component: ListaempleosComponent;
  let fixture: ComponentFixture<ListaempleosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaempleosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaempleosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
