import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TatooRoutingModule } from './tatoo-routing.module';
import { TatooComponent } from './tatoo.component';
import { ContactameComponent } from './contactame/contactame.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    TatooComponent,
    ContactameComponent,
    EducacionComponent,
    HabilidadesComponent,
    InicioComponent,
    MenuComponent,
    PortafolioComponent,
    SobreMiComponent
  ],
  imports: [
    CommonModule,
    TatooRoutingModule,
    FontAwesomeModule
  ]
})
export class TatooModule { }
