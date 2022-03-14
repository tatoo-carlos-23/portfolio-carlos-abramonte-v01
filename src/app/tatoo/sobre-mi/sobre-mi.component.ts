import { Component, OnInit } from '@angular/core';
import { EmitirVariableService } from 'src/app/tatoo/emitir-variable.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {

  constructor(
    private emitir: EmitirVariableService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.emitir.disparador_de_variable.emit(' SOBRE MI ');
    }, 0);
  }

  obtener_cv() {
    window.open('../../../assets/CV_-_CARLOS_ABRAMONTE_CHAVEZ.pdf');
  }
  // carlos-abramonte
}
