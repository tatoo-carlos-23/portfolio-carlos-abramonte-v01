import { Component, OnInit } from '@angular/core';
import { DataPortFolioService } from 'src/app/data-port-folio.service';
import { intContacto } from 'src/app/interfaces/app.interface';
import { EmitirVariableService } from 'src/app/tatoo/emitir-variable.service';

@Component({
  selector: 'app-contactame',
  templateUrl: './contactame.component.html',
  styleUrls: ['./contactame.component.css']
})
export class ContactameComponent implements OnInit {

  contactos: intContacto[] = [];

  constructor(
    private emitir: EmitirVariableService,
    private datos: DataPortFolioService
  ) { }

  ngOnInit(): void {
    const datos: intContacto[] = this.datos.getOnData(4)
    this.contactos = datos
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.emitir.disparador_de_variable.emit(' CONCTÁCTAME ');
    }, 0);
  }

  funcion(x: intContacto) {
    switch (x.titulo) {
      case 'WhatsApp':
        window.open('https://wa.me/51935421132/?text=Hola Carlos Abramonte!');
        break;

      case 'Telefono':
        window.open('tel:935421132');
        break;

      case 'Correo':
        window.open('mailto:car.abr.04@gmail.com')
        break;

      case 'Git Hub':
        window.open('https://github.com/tatoo-carlos-23');
        break;

      case 'LinkedIn':
        window.open('https://www.linkedin.com/in/carlos-abramonte-chavez-b998a61aa/');
        //window.open('../../../assets/desarrollador.png');
        break;

    }

  }


}
