import { z } from 'zod';

export const px = z.custom<`${number}px`>((val) => {
  return /^\d+px$/.test(val as string);
});
type Pixel = z.infer<typeof px>; // `${number}px`
