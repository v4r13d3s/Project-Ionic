import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private readonly STORAGE_KEY = 'userFavorites';
  private favoritesSubject = new BehaviorSubject<any[]>(this.loadFavorites());
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {}

  // Carga inicial desde localStorage
  private loadFavorites(): any[] {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    return storedData ? JSON.parse(storedData) : [];
  }

  // Agregar a favoritos
  addToFavorites(product: any): void {
    const currentFavorites = this.favoritesSubject.value;
    if (!currentFavorites.some(fav => fav.nombre === product.nombre)) {
      const newFavorites = [...currentFavorites, product];
      this.updateFavorites(newFavorites);
    }
  }

  // Eliminar de favoritos
  removeFromFavorites(productName: string): void {
    const newFavorites = this.favoritesSubject.value.filter(
      fav => fav.nombre !== productName
    );
    this.updateFavorites(newFavorites);
  }

  // Actualizar estado y localStorage
  private updateFavorites(favorites: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(favorites));
    this.favoritesSubject.next(favorites);
  }

  // En favorites.service.ts
  async isFavorite(productName: string): Promise<boolean> {
    const favorites = this.favoritesSubject.value;
    return favorites.some(fav => fav.nombre === productName);
  }

  getFavorites() {
    return this.favoritesSubject.value;
  }
}