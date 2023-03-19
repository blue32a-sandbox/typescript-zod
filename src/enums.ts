import { z } from 'zod';

export const fish = z.enum(['Salmon', 'Tuna', 'Trout']);
type Fish = z.infer<typeof fish>; // Salmon | Tuna | Trout

const values = ['Beef', 'Pork', 'Chikien'] as const; // need const
const meats = z.enum(values);
