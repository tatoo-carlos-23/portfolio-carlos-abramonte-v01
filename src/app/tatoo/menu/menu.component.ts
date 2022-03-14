import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataPortFolioService } from 'src/app/data-port-folio.service';
import { intMenu } from 'src/app/interfaces/app.interface';
import { EmitirVariableService } from 'src/app/tatoo/emitir-variable.service';
import { NavegarService } from 'src/app/tatoo/navegar.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus: intMenu[] = [];

  @Output() emitTitle = new EventEmitter<string>()

  constructor
    (
      private direccion: NavegarService,
      private emitir: EmitirVariableService,
      private datos: DataPortFolioService
    ) { }

  ngOnInit(): void {
    const data: intMenu[] = this.datos.getOnData(1)
    this.menus = data
  }

  funcion(datos: intMenu) {
    switch (datos.tipo) {

      case 'inicio':
        this.direccion.ir_a('inicio');
        this.emitir.disparador_de_variable.emit(' INICIO ');
        break;

      case 'sobre_mi':
        this.direccion.ir_a('sobre-mi');
        this.emitir.disparador_de_variable.emit(' SOBRE MI ');
        break;

      case 'habilidades':
        this.direccion.ir_a('habilidades');
        this.emitir.disparador_de_variable.emit(' MIS HABILIDADES ');
        break;

      case 'educacion':
        this.direccion.ir_a('educacion');
        this.emitir.disparador_de_variable.emit(' EDUCACIÓN ');
        break;

      case 'portafolio':
        this.direccion.ir_a('portafolio');
        this.emitir.disparador_de_variable.emit(' PORTAFOLIO ');
        break;

      case 'contactame':
        this.direccion.ir_a('contactame');
        this.emitir.disparador_de_variable.emit(' CONCTÁCTAME ');
        break;
    }
  }
}
