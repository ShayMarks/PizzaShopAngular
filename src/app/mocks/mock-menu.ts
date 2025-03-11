// File: src/app/mocks/mock-menu.ts
// מספק נתוני דמה לאפשרויות מיון וקטגוריות עבור החנות.
import { SortOption } from '../models/sort-option'; // ודא שקובץ זה קיים

export const SORT_OPTIONS: SortOption[] = [
  {
    id: 1,
    name: 'Price: Low to High',
    key: 'price',
    type: 'number',
    desc: false,
  },
  {
    id: 2,
    name: 'Price: High to Low',
    key: 'price',
    type: 'number',
    desc: true,
  },
  { id: 3, name: 'Name: A to Z', key: 'title', type: 'string', desc: false },
  { id: 4, name: 'Name: Z to A', key: 'title', type: 'string', desc: true },
];

export const CATEGORIES: string[] = ['Pizza', 'Drinks', 'Desserts', 'Sides'];
