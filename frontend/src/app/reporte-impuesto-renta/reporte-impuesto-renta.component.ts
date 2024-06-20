import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-reporte-impuesto-renta',
  templateUrl: './reporte-impuesto-renta.component.html',
  styleUrls: ['./reporte-impuesto-renta.component.css'],
})
export class ReporteImpuestoRentaComponent implements OnInit {
  impuestos: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<any[]>('http://localhost:5000/api/impuestos')
      .pipe(
        catchError((error) => {
          console.error('Error al obtener los datos:', error);
          return throwError(error);
        })
      )
      .subscribe((data) => {
        this.impuestos = data;
      });
  }
}
