import { Component, OnInit } from '@angular/core';
import { Usuario, Perfil } from '../../models/models';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  ObjetoUsuario: Usuario = new Usuario();
  Error: string;
  listaPerfiles: Perfil[];

  constructor() { }

  ngOnInit() {
  }
  crearUsuario() {

  }

}
