import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReporteImpuestoRentaComponent } from './reporte-impuesto-renta.component';

describe('ReporteImpuestoRentaComponent', () => {
  let component: ReporteImpuestoRentaComponent;
  let fixture: ComponentFixture<ReporteImpuestoRentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReporteImpuestoRentaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReporteImpuestoRentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
