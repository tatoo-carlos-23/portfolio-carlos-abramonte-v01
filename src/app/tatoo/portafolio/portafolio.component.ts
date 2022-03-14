import { Component, OnInit } from '@angular/core';
import { EmitirVariableService } from 'src/app/tatoo/emitir-variable.service';
import { NavegarService } from 'src/app/tatoo/navegar.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {

  constructor(
    private emitir: EmitirVariableService,
    private direccion: NavegarService,
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.emitir.disparador_de_variable.emit(' PORTAFOLIO ');
    }, 0);

    setTimeout(() => {
      this.direccion.ir_a('inicio');
    }, 1000)
  }



}
