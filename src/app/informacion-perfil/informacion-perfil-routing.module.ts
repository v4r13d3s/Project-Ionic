import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacionPerfilPage } from './informacion-perfil.page';

const routes: Routes = [
  {
    path: '',
    component: InformacionPerfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacionPerfilPageRoutingModule {}
