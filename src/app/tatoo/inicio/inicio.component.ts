import { Component, OnInit } from '@angular/core';
import { EmitirVariableService } from 'src/app/tatoo/emitir-variable.service';
import { NavegarService } from 'src/app/tatoo/navegar.service';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faBookAtlas } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  wsp = faWhatsapp
  ptfolio = faBookAtlas
  desarrollador: string = '';
  is: string = '<';
  de: string = '/>';
  nombre: string = 'Hola soy Carlos Abramonte';

  constructor(
    private direccion: NavegarService,
    private emitir: EmitirVariableService
  ) { }

  ngOnInit(): void {
    this.desarrollador = 'SOFTWARE DEVELOPER 💻';
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.emitir.disparador_de_variable.emit(' INICIO ');
    }, 0);
  }

  dev() {
    if (this.desarrollador == 'WEB DEVELOPER 💻') {
      this.desarrollador = 'DESARROLLADOR WEB 💻';
    } else if (this.desarrollador == 'DESARROLLADOR WEB 💻') {
      this.desarrollador = 'WEB DEVELOPER 💻';
    }
  }

  whatsapp() {
    this.direccion.ir_a('contactame');
    window.open('https://wa.me/51935421132/?text=Hola Carlos Abramonte!');
  }

  github() {
    this.direccion.ir_a('portafolio');
    window.open('https://github.com/tatoo-carlos-23');
    //window.open('tel:600123456');
  }
}
