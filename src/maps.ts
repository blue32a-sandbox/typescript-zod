import { z } from 'zod';

export const strNumMap = z.map(z.string(), z.number());
type StringNumberMap = z.infer<typeof strNumMap>; // Map<string, number>
