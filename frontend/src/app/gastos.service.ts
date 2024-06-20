import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GastosService {
  private url = 'assets/gastos.json';

  constructor(private http: HttpClient) {}

  getGastos(): Observable<any> {
    return this.http.get(this.url);
  }
}
