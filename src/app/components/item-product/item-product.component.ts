import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
  standalone: false,
})
export class ItemProductComponent implements OnInit {

  @Input() productUrl: string = '';
  @Input() nombre: string = '';
  @Input() precio: string = '';

  

  // Aquí tienes una lista para simular los productos favoritos
  favorites: any[] = [];
  // Producto que se está mostrando en esta tarjeta
  product = {
    name: 'Lápiz con Goma',
    price: 23.30
  };

  // Número aleatorio para la calificación con estrellas
  randomNumber: number;

  constructor() {
    // Generar un número aleatorio entre 1 y 5
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit() {}

  // Función para agregar un producto a favoritos
  addToFavorites() {
    // Si el producto ya está en favoritos, lo eliminamos
    const index = this.favorites.findIndex(fav => fav.name === this.product.name);
    if (index !== -1) {
      this.favorites.splice(index, 1); // Eliminar de favoritos
    } else {
      this.favorites.push(this.product); // Agregar a favoritos
    }
    console.log(this.favorites);
  }
}