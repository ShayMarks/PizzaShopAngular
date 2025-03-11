// File: src/app/products/products.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductsComponent } from './products.component';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';
import { PRODUCTS } from '../mocks/mock-products';
import { RouterTestingModule } from '@angular/router/testing';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let productServiceStub: Partial<ProductService>;

  productServiceStub = {
    getProducts: () => of(PRODUCTS),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [RouterTestingModule],
      providers: [{ provide: ProductService, useValue: productServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the products component', () => {
    expect(component).toBeTruthy();
  });
});
