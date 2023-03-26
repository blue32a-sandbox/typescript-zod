import { z } from 'zod';

export const numCache = z.record(z.number());
type NumberCache = z.infer<typeof numCache>; // {  [x: string]: number }

export const noEmptyKeys = z.record(z.string().min(1), z.number());
type NoEmptyKeys = z.infer<typeof noEmptyKeys>;
