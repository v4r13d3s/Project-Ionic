export interface AuthResponse {
    message: string;
    usuario: {
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
    };
    token: string;
  }