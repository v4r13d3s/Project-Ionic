import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { EditarPerfilPageRoutingModule } from './editar-perfil-routing.module';

import { EditarPerfilPage } from './editar-perfil.page';

// Importa los módulos de Swiper
import { register } from 'swiper/element/bundle';
register(); // Registra los componentes de Swiper

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfilPageRoutingModule
  ],
  declarations: [EditarPerfilPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditarPerfilPageModule {}
