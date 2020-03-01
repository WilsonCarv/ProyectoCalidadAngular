export class Perfil {
  IdPerfil: number;
  Nombre: string;
  Descripcion: string;
}
export class Usuario {
  IdUsuario: number;
  Nombre: string;
  NombreUsuario: string;
  Contrasena: string;
  FechaCreado: Date;
  CreadoUsuarioPor: number;
  IdPerfil: Perfil;
}
export class Asistente {
  IdAsistente: number;
  IdEvento: number;
  Nombre: string;
  NumeroCedula: string;
  Estado1: string;
  Estado2: string;
  Correo: string;
  Telefono: string;
  UltimaModificacion: Date;
  UltimaModificacionPor: number;
}
export class Evento {
  IdEvento: number;
  Nombre: string;
  FechaEvento: Date;
  FechaCreado: Date;
  UltimaModificacion: Date;
  UltimaModificacionPor: number;
  Cierre: boolean;
  CreadoPor: number;
}

