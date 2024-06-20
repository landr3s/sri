import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RegistroFacturaComponent } from './registro-factura/registro-factura.component';
import { ReporteFacturaComponent } from './reporte-factura/reporte-factura.component';
import { ReporteImpuestoRentaComponent } from './reporte-impuesto-renta/reporte-impuesto-renta.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'registro-factura', component: RegistroFacturaComponent },
  { path: 'reporte-factura', component: ReporteFacturaComponent },
  { path: 'reporte-impuesto-renta', component: ReporteImpuestoRentaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
