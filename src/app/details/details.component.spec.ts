// File: src/app/details/details.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { Product } from '../products';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;
  let productServiceStub: Partial<ProductService>;

  productServiceStub = {
    getProduct: (id: number) =>
      of({
        id,
        title: 'Test Pizza',
        description: 'Test Desc',
        price: 10,
        category: 'Pizza',
        image: '',
        isFavorite: 0,
        sellNo: 0,
        openDate: 20250101,
      } as Product),
    productLength: 7,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsComponent],
      providers: [
        { provide: ProductService, useValue: productServiceStub },
        { provide: ActivatedRoute, useValue: { params: of({ id: 1 }) } },
        { provide: Location, useValue: { back: () => {} } },
        { provide: Router, useValue: { navigate: () => {} } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the details component', () => {
    expect(component).toBeTruthy();
  });
});
