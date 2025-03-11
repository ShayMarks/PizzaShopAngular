// File: src/app/details/details.component.ts
// מציגה את פרטי המוצר ובאפשרותך לעבור למוצר הבא/קודם.
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../products';
import { ProductService } from '../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: number = 1;
  maxId: number = 0;
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      this.getProduct();
    });
  }

  getProduct(): void {
    this.productService.getProduct(this.id).subscribe((item: Product) => {
      this.product = item;
      this.maxId = this.productService.productLength;
    });
  }

  goBack(): void {
    this.router.navigate(['/'], { replaceUrl: true });
  }

  navigateProduct(direction: string) {
    if (direction === 'next' && this.id < this.maxId) {
      this.router.navigate(['/details', this.id + 1]);
    } else if (direction === 'prev' && this.id > 1) {
      this.router.navigate(['/details', this.id - 1]);
    }
  }
}
