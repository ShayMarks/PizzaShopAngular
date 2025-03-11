// File: src/app/models/sort-option.ts
export interface SortOption {
  id: number;
  name: string;
  key: string;
  type: string; // 'number' או 'string'
  desc: boolean;
}
