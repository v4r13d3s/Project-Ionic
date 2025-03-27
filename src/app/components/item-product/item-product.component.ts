import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service'; // Importar el servicio
import { FavoritesService } from '../../services/favorites.service'; // Importa el servicio de favoritos

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
  @Input() isFavorite: boolean = false; // Estado inicial del corazón


  // Lista para simular productos favoritos
  favorites: any[] = [];
  
  randomNumber: number;

  constructor(private router: Router, private cartService: CartService, private favoritesService: FavoritesService) {
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit() {
    // Verificar si el producto ya está en favoritos al cargar
    this.isFavorite = this.favoritesService.isFavorite(this.nombre);
  }
  // Navegar a la página de detalles con los datos del producto
  navigateToDetail(nombre: string, precio: string, productUrl: string, category: string, description: string) {
    this.router.navigate(['product-detail'], {
      queryParams: { nombre, precio, productUrl, category, description }
    });
  }

  // Método para alternar favoritos
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
    
    const product = {
      imageUrl: this.imageUrl,
      nombre: this.nombre,
      precio: this.precio,
      category: this.category,
      description: this.description
    };

    if (this.isFavorite) {
      this.favoritesService.addToFavorites(product);
    } else {
      this.favoritesService.removeFromFavorites(this.nombre);
    }
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
