// File: src/app/models/menu-item.ts
// מגדיר את המבנה של פריט תפריט (מוצר) בחנות הפיצות.
export interface MenuItem {
  id: number;
  title: string; // כותרת הפריט, לדוגמה: "Margherita Pizza"
  description: string; // תיאור המוצר
  price: number; // מחיר
  category: string; // קטגוריה (Pizza, Drinks, Desserts, Sides)
  image: string; // כתובת URL לתמונה
  isFavorite: boolean; // האם המוצר אהוב
  soldCount: number; // מספר מכירות
  availableDate: number; // תאריך זמינות (למשל בפורמט YYYYMMDD)
}
