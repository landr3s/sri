import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Factura } from './factura.model';

@Injectable({
  providedIn: 'root',
})
export class FacturaService {
  private apiUrl = 'http://localhost:5000/api/facturas';

  constructor(private http: HttpClient) {}

  obtenerFacturas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  eliminarFactura(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  addFactura(factura: Factura): Observable<Factura> {
    return this.http.post<Factura>(this.apiUrl, factura);
  }
  // Otros métodos como crearFactura, actualizarFactura, etc.
}
