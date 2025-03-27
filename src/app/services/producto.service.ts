import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Productos/product';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = 'https://apirestful-0l0n.onrender.com/api/productos';

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
