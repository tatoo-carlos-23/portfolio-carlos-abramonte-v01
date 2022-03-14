import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactameComponent } from './contactame/contactame.component';
import { EducacionComponent } from './educacion/educacion.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { TatooComponent } from './tatoo.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TatooComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent
      },
      {
        path: 'sobre-mi',
        component: SobreMiComponent
      },
      {
        path: 'habilidades',
        component: HabilidadesComponent
      },
      {
        path: 'educacion',
        component: EducacionComponent
      },
      {
        path: 'portafolio',
        component: PortafolioComponent
      },
      {
        path: 'contactame',
        component: ContactameComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TatooRoutingModule { }
