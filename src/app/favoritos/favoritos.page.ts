import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../services/favorites.service';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.page.html',
  styleUrls: ['./favoritos.page.scss'],
  standalone: false,
})
export class FavoritosPage implements OnInit {

  favorites$ = this.favoritesService.favorites$;

  constructor(private favoritesService: FavoritesService) { }

  ngOnInit() {
  }

}
