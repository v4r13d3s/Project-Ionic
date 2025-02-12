import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item-chip-product',
  templateUrl: './item-chip-product.component.html',
  styleUrls: ['./item-chip-product.component.scss'],
  standalone: false,
})
export class ItemChipProductComponent  implements OnInit {

  @Input() productImgUrl: string = '';
  @Input() nombreCard: string = '';
  @Input() precioCard: string = '';

  product = {
    name: 'Lápiz con Goma',
    price: 23.30
  };

  randomNumber: number;

  constructor() {
    // Generar un número aleatorio entre 1 y 5
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }

  ngOnInit() {}

}
