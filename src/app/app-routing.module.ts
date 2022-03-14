import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // --------> VERSION N° 00-01 - PORTFOLIO
  {
    path: '',
    loadChildren: () => import('./tatoo/tatoo.module').then(t => t.TatooModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
