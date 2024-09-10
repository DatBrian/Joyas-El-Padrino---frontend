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

// export type IPostUser = Omit<
//   IGetUser,
//   "_id" | "__v" | "createdAt" | "updatedAt"
// >;
