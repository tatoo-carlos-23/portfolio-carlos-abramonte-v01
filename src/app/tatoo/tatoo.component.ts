import { Component, OnInit } from '@angular/core';
import { EmitirVariableService } from './emitir-variable.service';

@Component({
  selector: 'app-tatoo',
  templateUrl: './tatoo.component.html',
  styleUrls: ['./tatoo.component.css']
})
export class TatooComponent implements OnInit {

  hola: string = '<CWACH/';
  mensaje_recibido: string = '';
  x: string = '>';

  constructor(
    private recibir: EmitirVariableService
  ) { }

  ngOnInit(): void {
    this.cargar_cabecera_principal();
  }

  cargar_cabecera_principal() {
    this.recibir.disparador_de_variable.subscribe((d: string) => {
      this.mensaje_recibido = d;
    })
  }
}
