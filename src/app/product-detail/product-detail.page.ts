import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service'; // Importar el servicio del carrito
import { FavoritesService } from '../services/favorites.service'; // Importa el servicio

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
  standalone: false,
})
export class ProductDetailPage implements OnInit {
  nombre: string = '';
  precio: string = '';
  productUrl: string = '';
  category: string = '';
  description: string = '';

  randomNumber: number;
  isFavorite = false; // Estado inicial: no está en favoritos
  productCount: number = 0; // Contador de productos

  constructor(private route: ActivatedRoute, private cartService: CartService, private favoritesService: FavoritesService) {
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.precio = params['precio'];
      this.productUrl = params['productUrl'];
      this.category = params['category'];
      this.description = params['description']
      // Verifica si el producto está en favoritos al cargar
      this.checkFavoriteStatus();
    });
  }

  // Verifica el estado de favoritos
  checkFavoriteStatus() {
    this.favoritesService.isFavorite(this.nombre).then(isFav => {
      this.isFavorite = isFav;
    });
  } 
  
  
  // Alternar favoritos
  toggleFavorite() {
    const product = {
      nombre: this.nombre,
      precio: this.precio,
      imageUrl: this.productUrl,
      category: this.category,
      description: this.description
    };

    if (this.isFavorite) {
      this.favoritesService.removeFromFavorites(this.nombre);
    } else {
      this.favoritesService.addToFavorites(product);
    }
    
    this.isFavorite = !this.isFavorite;
  }

  addToCart() {
    if (this.productCount > 0) {
      const product = {
        nombre: this.nombre,
        precio: this.precio,
        productUrl: this.productUrl,
        quantity: this.productCount
      };
      this.cartService.addToCart(product);
      console.log("Producto añadido al carrito:", product);
    }
  }
  
  payNow() {
    console.log("Redirigiendo al pago...");
  }


   // Funciones para manejar el contador
   increaseCount() {
    if (this.productCount < 10) {
      this.productCount++;
    }
  }

  decreaseCount() {
    if (this.productCount > 0) {
      this.productCount--;
    }
  }
}
