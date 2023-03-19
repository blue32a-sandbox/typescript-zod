import { z } from 'zod';

export const date = z.date();

export const min = z.date().min(new Date('2023-03-01'), { message: 'Too old' });
export const max = z.date().max(new Date('2023-03-01'), { message: 'Too young' });

export const coerce = z.coerce.date();
type CoerceDate = z.infer<typeof coerce>; // = Date
