import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, tap } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorage } from './storage/token.storage';
import { ApiUser } from './interfaces/api-user.interface';
import { AuthResponse } from './interfaces/auth-response';
import { Inject, Injectable } from '@angular/core'; // Añade Inject

@Injectable({
  providedIn: 'root'
})
export class ApiAuthService {
  private apiUrl = 'https://apirestful-0l0n.onrender.com/api/auth'; // Cambia esto por tu URL base
  private currentUserSubject = new BehaviorSubject<ApiUser | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(TokenStorage) private tokenStorage: TokenStorage
  ) {
    this.loadCurrentUser();
  }

  private loadCurrentUser(): void {
    const token = this.tokenStorage.getToken();
    if (token) {
      const user = this.decodeJwt(token);
      this.currentUserSubject.next(user);
    }
  }

  login(correo: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { correo, password }).pipe(
      tap(response => {
        this.tokenStorage.saveToken(response.token);
        const user = this.decodeJwt(response.token);
        // Mezclar datos del token con datos adicionales de la respuesta
        const fullUser = {
          ...user,
          ...response.usuario,
          imageUrl: response.usuario.imageUrl || 'assets/images/default-avatar.png'
        };
        this.currentUserSubject.next(fullUser);
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  register(userData: {
    nombre: string;
    correo: string;
    password: string;
    telefono: string;
    fechaNacimiento: string;
    image?: string;
  }): Observable<AuthResponse> {
    // Crear FormData para manejar la imagen si es necesario
    const formData = new FormData();
    formData.append('nombre', userData.nombre);
    formData.append('correo', userData.correo);
    formData.append('password', userData.password);
    formData.append('telefono', userData.telefono);
    formData.append('fechaNacimiento', userData.fechaNacimiento);
    
    if (userData.image) {
      formData.append('image', userData.image);
    }

    return this.http.post<AuthResponse>(`${this.apiUrl}/sign-up`, formData).pipe(
      tap(response => {
        this.tokenStorage.saveToken(response.token);
        const user = this.decodeJwt(response.token);
        const fullUser = {
          ...user,
          ...response.usuario,
          imageUrl: response.usuario.imageUrl || 'assets/images/default-avatar.png'
        };
        this.currentUserSubject.next(fullUser);
      }),
      catchError(error => {
        throw error;
      })
    );
  }

  logout(): void {
    this.tokenStorage.removeToken();
    this.currentUserSubject.next(null);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return !!this.tokenStorage.getToken();
  }

  private decodeJwt(token: string): ApiUser {
    try {
      // Dividir el token en sus partes
      const parts = token.split('.');
      if (parts.length !== 3) {
        throw new Error('El token JWT no tiene el formato correcto');
      }
  
      // Obtener la parte del payload
      const base64Url = parts[1];
      
      // Convertir de base64url a base64
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      
      // Decodificar base64 a string
      const decodedData = atob(base64);
      
      // Convertir caracteres especiales a formato URI
      const uriEncoded = decodedData.split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16).slice(-2)))
        .join('');
      
      // Decodificar URI component
      const jsonPayload = decodeURIComponent(uriEncoded);
  
      // Parsear a objeto JSON
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error('Error al decodificar el token JWT:', error);
      return {
        id: '',
        nombre: '',
        correo: '',
        estado: 'inactivo',
        imageUrl: 'assets/images/default-avatar.png'
      };
    }
  }

  getCurrentUserValue(): ApiUser | null {
    return this.currentUserSubject.value;
  }
}