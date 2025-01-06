// src/app/shared/models/author.model.ts
export interface Author {
  id: number;
  name: string;
  bio?: string;
  published?: boolean;
  creation_date?: string;
  last_update?: string;
  // Altri campi personalizzati
}