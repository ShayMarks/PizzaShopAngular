// File: src/app/main-page/main-page.component.ts
// קומפוננטת MainPage מנהלת את מצב הסינון והמיון ומעבירה אותם לתתי קומפוננטות (למשל Products).
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {
  selectedByCategory: string = '';
  selectedSortBy: number = 0;

  // קבלת שינוי בקטגוריה מה-Header
  onFilterCatChange(category: string) {
    this.selectedByCategory = category;
  }

  // קבלת שינוי באפשרות המיון מה-Header
  onSortByChange(sortIndex: number) {
    this.selectedSortBy = sortIndex;
  }
}
