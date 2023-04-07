import { z } from 'zod';

export const strMax10 = z.string().refine((val) => val.length <= 10, {
  message: "String can't be more than 10 characters",
});

export const arrMax3 = z.array(z.string()).refine((strs) => strs.length <= 3);
