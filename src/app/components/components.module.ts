import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    MenuInferiorComponent,
    MenuLateralComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    MenuInferiorComponent,
    MenuLateralComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class ComponentsModule { }
