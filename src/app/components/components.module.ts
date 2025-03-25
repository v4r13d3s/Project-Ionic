import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuInferiorComponent } from './menu-inferior/menu-inferior.component';
import { ItemChipComponent } from './item-chip/item-chip.component';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ItemChipProductComponent } from './item-chip-product/item-chip-product.component';
import { ItemProductComponent } from './item-product/item-product.component';
import { DatePickerModal } from './date-picker-modal/date-picker-modal.component'

@NgModule({
  declarations: [
    MenuInferiorComponent,
    ItemChipComponent,
    ItemChipProductComponent,
    ItemProductComponent,
    DatePickerModal

  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [
    MenuInferiorComponent,
    ItemChipComponent,
    ItemChipProductComponent,
    ItemProductComponent,
    DatePickerModal
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], 
})
export class ComponentsModule { }
