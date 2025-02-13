import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ProductDetailPage } from '../product-detail/product-detail.page';
import { PedidosPage } from '../pedidos/pedidos.page';
import { PerfilPage } from '../perfil/perfil.page';
import { FavoritosPage } from '../favoritos/favoritos.page';
import { CategoriasPage } from '../categorias/categorias.page';
import { NotificacionesPage } from '../notificaciones/notificaciones.page';
import { ConfiguracionPage } from '../configuracion/configuracion.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '',
    component: ProductDetailPage,
  },
  { 
    path: 'pedidos',
    component: PedidosPage
  },
  { 
    path: 'perfil',
    component: PerfilPage 
  },
  { 
    path: 'favoritos', 
    component: FavoritosPage 
  },
  { 
    path: 'categorias', 
    component: CategoriasPage 
  },
  { 
    path: 'notificaciones',
    component: NotificacionesPage 
  },
  { 
    path: 'configuracion', 
    component: ConfiguracionPage 
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
