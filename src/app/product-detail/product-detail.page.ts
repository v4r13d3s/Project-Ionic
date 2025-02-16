import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  randomNumber: number;

  constructor(private route: ActivatedRoute) {
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.precio = params['precio'];
      this.productUrl = params['productUrl'];
    });
  }

  
  isFavorite = false; // Estado inicial: no está en favoritos
  
  toggleFavorite() {
    this.isFavorite = !this.isFavorite; // Cambia el estado al hacer clic
  }

}
