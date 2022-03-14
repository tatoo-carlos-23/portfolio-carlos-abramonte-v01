import { Component, OnInit } from '@angular/core';
import { DataPortFolioService } from 'src/app/data-port-folio.service';
import { intEducacion } from 'src/app/interfaces/app.interface';
import { EmitirVariableService } from 'src/app/tatoo/emitir-variable.service';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  flecha = faArrowRight
  constructor(
    private emitir: EmitirVariableService,
    private datos: DataPortFolioService
  ) { }

  educacion: intEducacion[] = [];

  ngOnInit(): void {
    const datos: intEducacion[] = this.datos.getOnData(2)
    this.educacion = datos
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.emitir.disparador_de_variable.emit(' EDUCACIÓN ');
    }, 0);
  }

}
