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

export interface IGetCompra {
  _id: string;
  cliente_id: string;
  fecha: Date;
  descripcion: string;
  valor: number;
  cuotas: number;
  estado: string;
  pagos: unknown[];
  saldo_actual: number;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
