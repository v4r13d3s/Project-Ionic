import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacionPerfilPageRoutingModule } from './informacion-perfil-routing.module';

import { InformacionPerfilPage } from './informacion-perfil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacionPerfilPageRoutingModule
  ],
  declarations: [InformacionPerfilPage]
})
export class InformacionPerfilPageModule {}
