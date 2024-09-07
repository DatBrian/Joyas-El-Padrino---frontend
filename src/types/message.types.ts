export interface IPostMessage {
  nombre: string;
  telefono: string;
  mensaje?: string;
}

export interface IGetMessages {
  nombre: string;
  telefono: string;
  _id: string;
  email: string;
  mensaje: string;
  readed: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
