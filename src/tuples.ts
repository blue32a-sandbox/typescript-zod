import { z } from 'zod';

export const athlete = z.tuple([
  z.string(),
  z.number(),
  z.object({
    pointsScored: z.number(),
  }),
]);
type Athlete = z.infer<typeof athlete>;

export const variadic = z.tuple([z.string()]).rest(z.number());
