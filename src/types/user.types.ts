export interface IUserLogin {
  username: string;
  contraseña: string;
}

export interface IGetUser {
  _id: string;
  nombre: string;
  cedula: number;
  direccion: string;
  telefono: number;
  correo: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  rol: string;
}

export interface IPostUser {
  nombre: string;
  cedula: string;
  direccion: string;
  telefono: string;
  correo: string;
  contraseña: string;
  rol: string;
}

export interface IGetSeller {
  _id: string;
  nombre: string;
  cedula: number;
  direccion: string;
  telefono: number;
  correo: string;
  rol: string;
  clientes: Cliente[];
  totalSaldos: number;
  numeroClientes: number;
}

export interface IGetSellerDetails {
  _id: string;
  nombre: string;
  cedula: number;
  direccion: string;
  telefono: number;
  correo: string;
  rol: string;
  clientes: Cliente[];
  saldos: unknown[];
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Cliente {
  _id: string;
  nombre: string;
  saldos: unknown[];
}

// export type IPostUser = Omit<
//   IGetUser,
//   "_id" | "__v" | "createdAt" | "updatedAt"
// >;
