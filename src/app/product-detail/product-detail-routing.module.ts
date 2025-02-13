import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductDetailPage } from './product-detail.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPage,
  },
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductDetailPageRoutingModule {}
