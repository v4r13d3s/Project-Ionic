import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  // Número aleatorio para la calificación con estrellas
  randomNumber: number;

  constructor(private router: Router) {
    // Generar un número aleatorio entre 1 y 5
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit() {}

  // Navegar a la página de detalles con los datos del producto
  navigateToDetail(nombre: string, precio: string, productUrl: string) {
    this.router.navigate(['product-detail'], {
      queryParams: { nombre, precio, productUrl }
    });
  }

  //Estado del icon favorite
  isFavorite: boolean = false; // Estado inicial: no marcado como favorito

   // Cambia el estado del ícono al hacer clic
   toggleFavorite(event: Event): void {
    event.stopPropagation(); // Evita que el clic también active el evento de la card
    this.isFavorite = !this.isFavorite; // Cambia entre true y false
  }
}
