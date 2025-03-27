import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service'; // Importar el servicio

@Component({
  selector: 'app-item-product',
  templateUrl: './item-product.component.html',
  styleUrls: ['./item-product.component.scss'],
  standalone: false,
})
export class ItemProductComponent implements OnInit {

  @Input() imageUrl: string = '';
  @Input() nombre: string = '';
  @Input() precio: string = '';
  @Input() category: string = ''; 
  @Input() description: string = ''; 
  @Input() favorite: boolean = false; 

  // Lista para simular productos favoritos
  favorites: any[] = [];
  
  randomNumber: number;

  constructor(private router: Router, private cartService: CartService) {
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit() {}

  // Navegar a la página de detalles con los datos del producto
  navigateToDetail(nombre: string, precio: string, productUrl: string, category: string, description: string) {
    this.router.navigate(['product-detail'], {
      queryParams: { nombre, precio, productUrl, category, description }
    });
  }

  // Función para agregar un producto a favoritos
  addToFavorites() {
    const index = this.favorites.findIndex(fav => fav.name === this.nombre);
    if (index !== -1) {
      this.favorites.splice(index, 1); 
    } else {
      this.favorites.push({ name: this.nombre, imageUrl: this.imageUrl, price: this.precio, category: this.category, description: this.description });
    }
    console.log(this.favorites);
  }

  // Métodos para manejar la cantidad de productos
  increaseQuantity(item: any) {
    item.quantity++;
    item.totalPrice = item.quantity * item.price;  
  }

  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
    }
  }

  // Agregar producto al carrito
  addToCart() {
    const product = {
      productUrl: this.imageUrl,
      nombre: this.nombre,
      precio: this.precio,
      category: this.category,
      description: this.description,
    };
    this.cartService.addToCart(product);
  }

}
