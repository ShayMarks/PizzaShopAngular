// File: src/app/products.ts
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isFavorite: number; // 1 אם המוצר מועדף, 0 אחרת
  sellNo: number;
  openDate: number; // תאריך פתיחה או זמינות
  [key: string]: any; // לאפשר גישה דינאמית
}
