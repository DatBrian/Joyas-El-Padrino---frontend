export interface IPostSaldo {
  cliente_id: string;
  fecha: Date;
  descripcion: string;
  valor: string;
  saldo_actual?: string;
  cuotas: string;
  estado?: string;
  pagos?: Array<string>;
}
