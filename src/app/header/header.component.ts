// File: src/app/header/header.component.ts
// קומפוננטת Header המציגה את הלוגו, קישורי ניווט, ותפריטי סינון ומיון.
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CATEGORIES, SORT_OPTIONS } from '../mocks/mock-menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() filterCatChange = new EventEmitter<string>(); // אמיט אירוע שינוי קטגוריה
  @Output() sortByChange = new EventEmitter<number>(); // אמיט אירוע שינוי מיון

  sortOptions = SORT_OPTIONS; // רשימת אפשרויות מיון
  categories = CATEGORIES; // רשימת קטגוריות
  selectCat: string = ''; // הקטגוריה הנבחרת
  selectSort: number = 0; // אינדקס אפשרות המיון הנבחרת

  constructor() {}

  ngOnInit(): void {}

  // שולח את הקטגוריה הנבחרת להורה
  filterCat() {
    this.filterCatChange.emit(this.selectCat);
  }

  // שולח את אינדקס המיון הנבחר
  sortBy() {
    this.sortByChange.emit(this.selectSort);
  }
}
