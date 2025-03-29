import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Esto es importante
})
export class TokenStorage {
  private readonly TOKEN_KEY = 'auth_token';

  constructor() {}

  saveToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}