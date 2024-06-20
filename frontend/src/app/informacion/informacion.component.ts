import { Component } from '@angular/core';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css'],
})
export class InformacionComponent {
  deducibles = ['Salud', 'Educación', 'Alimentación', 'Vivienda', 'Vestimenta'];
  deducibleSeleccionado: string | null = null;

  mostrarInformacion(deducible: string) {
    this.deducibleSeleccionado = deducible;
  }

  borrarDeducible(deducible: string) {
    this.deducibles = this.deducibles.filter((d) => d !== deducible);
    if (this.deducibleSeleccionado === deducible) {
      this.deducibleSeleccionado = null;
    }
  }

  obtenerInformacion(deducible: string): string {
    switch (deducible) {
      case 'Salud':
        return 'Los gastos en salud, incluyendo consultas médicas, medicamentos y procedimientos médicos, son deducibles de impuestos. Asegúrate de guardar todos los recibos y facturas para justificar estos gastos.';
      case 'Educación':
        return 'Los gastos en educación, como matrículas, útiles escolares y cursos de formación, pueden deducirse de impuestos. Esto incluye educación primaria, secundaria y superior.';
      case 'Alimentación':
        return 'Los gastos en alimentación, que incluyen la compra de alimentos y bebidas no alcohólicas, son deducibles. Esto puede incluir compras en supermercados y tiendas de comestibles.';
      case 'Vivienda':
        return 'Los gastos en vivienda, tales como alquileres, hipotecas y reparaciones del hogar, son deducibles. También se incluyen servicios públicos como agua y electricidad.';
      case 'Vestimenta':
        return 'Los gastos en vestimenta, incluyendo ropa y calzado, son deducibles. Asegúrate de que estos gastos sean necesarios y justificados para el trabajo o uso diario.';
      default:
        return '';
    }
  }

  obtenerTitulo(deducible: string): string {
    switch (deducible) {
      case 'Salud':
        return 'Información sobre Salud';
      case 'Educación':
        return 'Información sobre Educación';
      case 'Alimentación':
        return 'Información sobre Alimentación';
      case 'Vivienda':
        return 'Información sobre Vivienda';
      case 'Vestimenta':
        return 'Información sobre Vestimenta';
      default:
        return '';
    }
  }
}
