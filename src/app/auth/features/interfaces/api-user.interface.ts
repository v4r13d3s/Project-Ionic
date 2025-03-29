export interface ApiUser {
    id: string;
    nombre: string;
    correo: string;
    idRol?: string;
    rol?: {
      id: string;
      nombre: string;
      descripcion?: string;
    };
    estado: string;
    imageUrl: string;
    loginType?: string;
    iat?: number;
    exp?: number;
  }