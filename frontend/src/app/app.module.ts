import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InformacionComponent } from './informacion/informacion.component';
import { RegistroFacturaComponent } from './registro-factura/registro-factura.component';
import { ReporteFacturaComponent } from './reporte-factura/reporte-factura.component';
import { ReporteImpuestoRentaComponent } from './reporte-impuesto-renta/reporte-impuesto-renta.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Importamos solo HttpClientModule
import { FacturaService } from './factura.service';
import { ImpuestoService } from './impuesto.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    InformacionComponent,
    RegistroFacturaComponent,
    ReporteFacturaComponent,
    ReporteImpuestoRentaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Importamos solo HttpClientModule para manejar las peticiones HTTP
  ],
  providers: [FacturaService, ImpuestoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
