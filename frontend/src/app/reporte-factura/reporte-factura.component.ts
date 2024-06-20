import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacturaService } from '../factura.service';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-reporte-factura',
  templateUrl: './reporte-factura.component.html',
  styleUrls: ['./reporte-factura.component.css'],
})
export class ReporteFacturaComponent implements OnInit {
  facturas: any[] = [];

  constructor(
    private http: HttpClient,
    private facturaService: FacturaService
  ) {}

  ngOnInit(): void {
    this.obtenerFacturas();
  }

  obtenerFacturas() {
    this.facturaService.obtenerFacturas().subscribe((data: any[]) => {
      this.facturas = data;
    });
  }

  editarFactura(factura: any) {
    // Lógica para editar la factura
    console.log('Editar factura:', factura);
  }

  eliminarFactura(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta factura?')) {
      this.facturaService.eliminarFactura(id).subscribe(
        () => {
          this.obtenerFacturas();
        },
        (error) => {
          console.error('Error al eliminar la factura:', error);
        }
      );
    }
  }
}
