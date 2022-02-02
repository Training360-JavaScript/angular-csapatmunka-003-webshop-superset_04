import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Product } from '../model/product';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  jsonName: string = "products";

  private url: string = `${environment.jsonApiUrl}/${this.jsonName}`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.url);
  }

  getProductsByCatID(catId: number): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}?catId=${catId}`);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.url}?id=${id}`);
  }

  update(product: Product): Observable<any> {
    return this.http.put( `${this.url}/${product.id}`, product )
  }

  remove(product: any): Observable<any> {
    product = product.id ? product : product;
    return this.http.delete( `${this.url}/${product}` );
  }
}
