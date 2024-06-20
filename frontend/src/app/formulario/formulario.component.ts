import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ImpuestoService } from '../impuesto.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  constructor(
    private http: HttpClient,
    private impuestoService: ImpuestoService
  ) {}
  cedula: string = '';
  ingreso: number = 0;
  salud: number = 0;
  educacion: number = 0;
  vestimenta: number = 0;
  vivienda: number = 0;
  alimentacion: number = 0;
  impuesto: number | null = null;

  private readonly limites = {
    salud: 15238.6,
    educacion: 3809.65,
    vestimenta: 3809.65,
    vivienda: 3809.65,
    alimentacion: 3809.65,
  };

  private readonly tablaImpuestos = [
    { min: 0, max: 11722, basica: 0, porcentaje: 0 },
    { min: 11722, max: 14930, basica: 0, porcentaje: 5 },
    { min: 14930, max: 19385, basica: 160, porcentaje: 10 },
    { min: 19385, max: 25638, basica: 606, porcentaje: 12 },
    { min: 25638, max: 33738, basica: 1292, porcentaje: 15 },
    { min: 33738, max: 44721, basica: 2208, porcentaje: 20 },
    { min: 44721, max: 57953, basica: 3621, porcentaje: 25 },
    { min: 57953, max: 103580, basica: 6429, porcentaje: 30 },
    { min: 103580, max: Infinity, basica: 15629, porcentaje: 37 },
  ];

  calcularImpuesto() {
    const gastos =
      this.salud +
      this.educacion +
      this.vestimenta +
      this.vivienda +
      this.alimentacion;
    const baseImponible = this.ingreso - gastos;

    const rango = this.tablaImpuestos.find(
      (r) => baseImponible >= r.min && baseImponible <= r.max
    );

    let impuestoRenta = 0;
    let fraccionBasica = 0;
    let excedente = 0;
    let valorExcedente = 0;
    let impuestoFB = 0;

    if (rango) {
      fraccionBasica = rango.basica;
      excedente = baseImponible - rango.min;
      valorExcedente = excedente * (rango.porcentaje / 100);
      impuestoFB = rango.basica;
      impuestoRenta = rango.basica + valorExcedente;
    }

    this.impuesto = impuestoRenta;

    this.guardarImpuesto({
      cedula: this.cedula,
      ingreso: this.ingreso,
      salud: this.salud,
      educacion: this.educacion,
      vestimenta: this.vestimenta,
      vivienda: this.vivienda,
      alimentacion: this.alimentacion,
      gastos,
      baseImponible,
      fraccionBasica,
      excedente,
      valorExcedente,
      impuestoFB,
      impuestoRenta,
    });
  }

  guardarImpuesto(impuestoData: any) {
    this.impuestoService.addImpuesto(impuestoData).subscribe(
      (response) => {
        console.log('Impuesto guardado:', response);
      },
      (error) => {
        console.error('Error al guardar el impuesto:', error);
      }
    );
  }
}
