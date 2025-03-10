import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: false,
})
export class CartPage {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  ionViewWillEnter() {
    this.cartItems = this.cartService.getCart();
  }

  // Aumentar cantidad
  increaseQuantity(item: any) {
    item.quantity++;
  }

  // Disminuir cantidad
  decreaseQuantity(item: any) {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  // Eliminar del carrito
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCart(); // Actualizar vista
  }

  // Vaciar el carrito
  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
