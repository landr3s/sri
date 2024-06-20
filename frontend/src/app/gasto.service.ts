import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gasto } from './models/Gasto.js';

@Injectable({
  providedIn: 'root',
})
export class GastoService {
  private configUrl = 'assets/datos.json';

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http está funcionando…');
  }

  obtenerDatos(): Observable<Gasto[]> {
    return this.httpclient.get<Gasto[]>(this.configUrl);
  }
}
