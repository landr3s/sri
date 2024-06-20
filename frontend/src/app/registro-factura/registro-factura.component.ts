import { Component } from '@angular/core';
import { FacturaService } from '../factura.service';
import { Factura } from '../factura.model';

@Component({
  selector: 'app-registro-factura',
  templateUrl: './registro-factura.component.html',
  styleUrls: ['./registro-factura.component.css'],
})
export class RegistroFacturaComponent {
  factura: Factura = {
    tipoGasto: '',
    ruc: '',
    valor: 0,
  };

  constructor(private facturaService: FacturaService) {}

  onSubmit() {
    this.facturaService.addFactura(this.factura).subscribe(
      (response) => {
        console.log('Factura registrada:', response);
      },
      (error) => {
        console.error('Error al registrar la factura:', error);
      }
    );
  }
}
