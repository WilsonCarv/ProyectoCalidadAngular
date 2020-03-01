import { Component, OnInit } from '@angular/core';
import { Evento, Asistente } from '../../models/models';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
listaEventos: Evento[];
Evento: Evento;
listaAsistentes: Asistente[];
datos: any[];
  constructor() { }

  ngOnInit() {
  }
  EnviarDatos() {
    console.log(this.datos);
  }

}
