import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;
  let fixture: ComponentFixture<FormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the tax correctly', () => {
    component.ingreso = 20000;
    component.salud = 4000;
    component.educacion = 0;
    component.vestimenta = 0;
    component.vivienda = 0;
    component.alimentacion = 0;
    component.calcularImpuesto();
    expect(component.impuesto).toBe(267); // Basado en el ejemplo proporcionado
  });
});
