// File: src/app/services/order.service.ts
// שירות זה מטפל בהגשת הזמנות. במערכת אמיתית, כאן היית שולח את נתוני ההזמנה לשרת.
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Order {
  customerName: string;
  address: string;
  phone: string;
  items: { productId: number; quantity: number }[];
  totalAmount: number;
}

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  // פונקציה המדמה שליחת הזמנה ומחזירה Observable עם הודעת אישור.
  submitOrder(order: Order): Observable<string> {
    console.log('Order submitted:', order);
    // במערכת אמיתית כאן יקרה קריאה לשרת.
    return of('Order submitted successfully!');
  }
}
