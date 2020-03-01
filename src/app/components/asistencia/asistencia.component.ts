import { Component, OnInit } from '@angular/core';
import { Evento, Asistente } from '../../models/models';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.css']
})
export class AsistenciaComponent implements OnInit {
listaEventos: Evento[];
listaAsistentes: Asistente[];
ObjEvento: Evento;
Error: string;
  constructor() { }

  ngOnInit() {
  }
  ObtenerListaAsistentes() {

  }

}
