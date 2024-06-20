import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImpuestoService {
  private apiUrl = 'http://localhost:5000/api/impuestos';

  constructor(private http: HttpClient) {}

  addImpuesto(impuesto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, impuesto);
  }
}
