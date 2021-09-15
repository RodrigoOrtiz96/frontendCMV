import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsociarCuentaComponent } from './asociar-cuenta.component';

describe('AsociarCuentaComponent', () => {
  let component: AsociarCuentaComponent;
  let fixture: ComponentFixture<AsociarCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsociarCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsociarCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
