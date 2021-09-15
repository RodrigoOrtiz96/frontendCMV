import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarClientesComponent } from './agregar-editar-clientes.component';

describe('AgregarEditarClientesComponent', () => {
  let component: AgregarEditarClientesComponent;
  let fixture: ComponentFixture<AgregarEditarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarEditarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
