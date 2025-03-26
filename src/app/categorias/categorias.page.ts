import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

interface Category {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: false,
})
export class CategoriasPage implements OnInit {

  categories: Category[] = [
    { name: 'Papel', icon: 'https://cdn-icons-png.flaticon.com/512/448/448173.png' },
    { name: 'Escolares', icon: 'https://cdn-icons-png.flaticon.com/512/1546/1546945.png' },
    { name: 'Cuadernos', icon: 'https://cdn-icons-png.flaticon.com/512/3683/3683305.png' },
    { name: 'Escritura', icon: 'https://cdn-icons-png.flaticon.com/512/12695/12695315.png' },
    { name: 'Oficina', icon: 'https://cdn-icons-png.flaticon.com/512/1142/1142618.png' },
    { name: 'Arte', icon: 'https://cdn-icons-png.flaticon.com/512/2970/2970785.png' },
    { name: 'Impresion', icon: 'https://cdn-icons-png.flaticon.com/512/1339/1339350.png' },
    { name: 'Manualidad', icon: 'https://cdn-icons-png.flaticon.com/512/3813/3813691.png' },
    { name: 'Accesorios', icon: 'https://cdn-icons-png.flaticon.com/512/479/479063.png' },
    { name: 'Regalos', icon: 'https://cdn-icons-png.flaticon.com/512/7813/7813840.png' },
    { name: 'Archivo', icon: 'https://cdn-icons-png.flaticon.com/512/716/716784.png' }
  ];

  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  selectCategory(category: Category) {
    // Navigate to the specific category page or perform an action
    console.log('Selected category:', category.name);
    // Example navigation:
    // this.navCtrl.navigateForward(`/category/${category.name.toLowerCase()}`);
  }
}
