import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SriService {
  constructor() {}

  calcularImpuesto(rentaAnual: number): number {
    let impuesto = 0;
    if (rentaAnual <= 11212) {
      impuesto = 0;
    } else if (rentaAnual <= 14285) {
      impuesto = (rentaAnual - 11212) * 0.05;
    } else if (rentaAnual <= 17854) {
      impuesto = 154 + (rentaAnual - 14285) * 0.1;
    } else if (rentaAnual <= 21442) {
      impuesto = 511 + (rentaAnual - 17854) * 0.12;
    } else if (rentaAnual <= 42874) {
      impuesto = 941 + (rentaAnual - 21442) * 0.15;
    } else if (rentaAnual <= 64297) {
      impuesto = 4156 + (rentaAnual - 42874) * 0.2;
    } else if (rentaAnual <= 85729) {
      impuesto = 8882 + (rentaAnual - 64297) * 0.25;
    } else if (rentaAnual <= 114288) {
      impuesto = 13982 + (rentaAnual - 85729) * 0.3;
    } else {
      impuesto = 22482 + (rentaAnual - 114288) * 0.35;
    }
    return impuesto;
  }
}
