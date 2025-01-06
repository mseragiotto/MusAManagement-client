// src/app/shared/models/museum.model.ts
export interface Museum {
  id: number;
  name: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  website?: string;
  published?: boolean;
  // Altri campi personalizzati
}