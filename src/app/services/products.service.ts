import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(public http: HttpClient) {}
  getProducts() {
    const url = `https://fakestoreapi.com/products`;
    return this.http.get(url);
  }
  getProductDetails(id: number) {
    const url = `https://fakestoreapi.com/products/${id}`;
    return this.http.get(url);
  }
}
