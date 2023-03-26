import { z } from 'zod';

export const numSet = z.set(z.number());
type NumberSet = z.infer<typeof numSet>; // Set<number>

export const nonempty = z.set(z.string()).nonempty();
export const minFive = z.set(z.string()).min(5);
export const maxFive = z.set(z.string()).max(5);
export const sizeFive = z.set(z.string()).size(5);
