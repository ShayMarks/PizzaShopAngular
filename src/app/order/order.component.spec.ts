// File: src/app/order/order.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderComponent } from './order.component';
import { OrderService } from '../services/order.service';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  let orderServiceStub: Partial<OrderService>;

  orderServiceStub = {
    submitOrder: () => of('Order submitted successfully!'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderComponent],
      imports: [FormsModule],
      providers: [{ provide: OrderService, useValue: orderServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the order component', () => {
    expect(component).toBeTruthy();
  });
});
