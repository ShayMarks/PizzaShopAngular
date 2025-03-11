// File: src/app/services/product.service.ts
// שירות זה מספק את הנתונים של המוצרים (מוצרים מהדאטה הדמה).
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../products'; // יש לייבא Product (ליחיד)
import { PRODUCTS } from '../mocks/mock-products';

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
    const found = PRODUCTS.find((product) => product.id === id);
    return of(found);
  }
}
