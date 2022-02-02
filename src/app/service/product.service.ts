import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  jsonName: string = 'products';

  private url: string = `${environment.jsonApiUrl}/${this.jsonName}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductsByCatID(catId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}?catId=${catId}`);
  }

  getProductById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}?id=${id}`);
  }
}
