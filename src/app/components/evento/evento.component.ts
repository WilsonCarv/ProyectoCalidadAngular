import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/models';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
ObjEvento: Evento = new Evento();
Error: string;
  constructor() { }

  ngOnInit() {
  }

  CrearEvento() {

  }

}
