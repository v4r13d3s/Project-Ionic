import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: any[] = []; // Lista de productos en el carrito

  constructor() {}

  // Agregar un producto al carrito
  addToCart(product: any) {
    const existingProduct = this.cart.find(item => item.nombre === product.nombre);
    if (existingProduct) {
      existingProduct.quantity += product.quantity; // Sumar la cantidad seleccionada al existente
    } else {
      this.cart.push(product); // Agregar nuevo producto al carrito
    }
    console.log('Carrito actualizado:', this.cart);
  }

  // Obtener todos los productos del carrito
  getCart() {
    return this.cart;
  }

  // Eliminar un producto del carrito
  removeFromCart(product: any) {
    this.cart = this.cart.filter((item) => item.nombre !== product.nombre);
  }

  // Vaciar el carrito
  clearCart() {
    this.cart = [];
  }
}
