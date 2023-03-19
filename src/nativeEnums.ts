import { z } from 'zod';

export enum Fruits {
  Apple,
  Banan,
}
export const fruit = z.nativeEnum(Fruits);
type FruitEnum = z.infer<typeof fruit>; // Fruits

export enum Fishes {
  Salmon = 'salmon',
  Tuna = 'tuna',
  Trout = 0,
}
export const fishe = z.nativeEnum(Fishes);

export const Meats = {
  Beef: 'beef',
  Pork: 'pork',
  Chikien: 3,
} as const;
export const meat = z.nativeEnum(Meats);
