export interface Impuesto {
  _id?: string;
  cedula: string;
  gastos: number;
  ingreso: number;
  baseImponible: number;
  fraccionBasica: number;
  excedente: number;
  valorExcedente: number;
  impuestoFB: number;
  impuestoRenta: number;
}
