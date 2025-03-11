// File: src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { PRODUCTS } from '../mocks/mock-products';
import { Observable, of } from 'rxjs';
import { Product } from '../products'; // יש לייבא את Product (ליחיד) מהנתיב הנכון

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productLength: number = PRODUCTS.length;

  constructor() {}

  // מחזיר את כל המוצרים כ-Observable
  getProducts(): Observable<Product[]> {
    this.productLength = PRODUCTS.length;
    return of(PRODUCTS);
  }

  // מחזיר מוצר בודד לפי מזהה
  getProduct(id: number): Observable<Product> {
    this.productLength = PRODUCTS.length;
    return of(PRODUCTS.find((product) => product.id === id));
  }
}
