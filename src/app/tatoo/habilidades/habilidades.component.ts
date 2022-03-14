import { Component, OnInit } from '@angular/core';
import { DataPortFolioService } from 'src/app/data-port-folio.service';
import { intHabilidades } from 'src/app/interfaces/app.interface';
import { EmitirVariableService } from 'src/app/tatoo/emitir-variable.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor(
    private emitir: EmitirVariableService,
    private datos: DataPortFolioService
  ) { }

  habilidades_de: intHabilidades[] = [];

  ngOnInit(): void {
    const datos: intHabilidades[] = this.datos.getOnData(3)
    this.habilidades_de = datos
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.emitir.disparador_de_variable.emit(' MIS HABILIDADES ');
    }, 0);
  }

}
