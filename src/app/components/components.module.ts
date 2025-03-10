import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ItemChipComponent } from './item-chip/item-chip.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ItemChipProductComponent } from './item-chip-product/item-chip-product.component';
import { ItemProductComponent } from './item-product/item-product.component';

@NgModule({
  declarations: [
    MenuInferiorComponent,
    MenuLateralComponent,
    ItemChipComponent,
    ItemChipProductComponent,
    ItemProductComponent

  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    MenuInferiorComponent,
    MenuLateralComponent,
    ItemChipComponent,
    ItemChipProductComponent,
    ItemProductComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class ComponentsModule { }
