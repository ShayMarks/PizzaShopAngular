// File: src/app/products/products.component.ts
// מציגה את רשימת המוצרים תוך סינון ומיון.
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Product } from '../products';
import { SortOption } from '../models/sort-option';
import { ProductService } from '../services/product.service';
// ודא שהייבוא הבא תואם לקובץ mock-menu המעודכן
import { SORT_OPTIONS } from '../mocks/mock-menu';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() filterByCategory: string = '';
  @Input() sortBy: number = 0;

  allProducts: Product[] = []; // משתנה לשמירת הרשימה המקורית
  products: Product[] = [];
  sortOptions: SortOption[] = SORT_OPTIONS;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  ngOnChanges() {
    this.applyFiltersAndSort();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe((items: Product[]) => {
      this.allProducts = items; // שומרים את כל המוצרים
      this.applyFiltersAndSort();
    });
  }

  applyFiltersAndSort() {
    // מסנן לפי קטגוריה אם נבחרה, על פי הרשימה המקורית (allProducts)
    let filtered = this.filterByCategory
      ? this.allProducts.filter(
          (item) => item.category === this.filterByCategory
        )
      : [...this.allProducts];
    // מיון לפי אפשרות שנבחרה
    let sortOption = this.sortOptions[this.sortBy];
    if (sortOption) {
      if (sortOption.type === 'number') {
        filtered.sort((a, b) =>
          sortOption.desc
            ? b[sortOption.key] - a[sortOption.key]
            : a[sortOption.key] - b[sortOption.key]
        );
      } else {
        filtered.sort((a, b) => {
          let nameA = a[sortOption.key].toString().toUpperCase();
          let nameB = b[sortOption.key].toString().toUpperCase();
          if (nameA < nameB) return sortOption.desc ? 1 : -1;
          if (nameA > nameB) return sortOption.desc ? -1 : 1;
          return 0;
        });
      }
    }
    this.products = filtered;
  }
}
