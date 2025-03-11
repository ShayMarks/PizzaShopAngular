// File: src/app/order/order.component.ts
// קומפוננטה זו מציגה טופס להזמנת משלוח, בו המשתמש ממלא שם, כתובת וטלפון.
import { Component } from '@angular/core';
import { OrderService, Order } from '../services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
  customerName: string = '';
  address: string = '';
  phone: string = '';
  orderMessage: string = '';
  // לדוגמה – נניח שההזמנה כוללת פריט אחד (ניתן להרחיב לפי צורך)
  items = [{ productId: 1, quantity: 1 }];
  totalAmount: number = 12.99; // מחיר לדוגמה

  constructor(private orderService: OrderService) {}

  submitOrder() {
    const order: Order = {
      customerName: this.customerName,
      address: this.address,
      phone: this.phone,
      items: this.items,
      totalAmount: this.totalAmount,
    };

    this.orderService.submitOrder(order).subscribe((response) => {
      this.orderMessage = response;
    });
  }
}
