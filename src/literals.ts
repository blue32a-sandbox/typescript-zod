import { z } from 'zod';

export const tuna = z.literal('tuna');
export const twelve = z.literal(12);
export const twobig = z.literal(2n);
export const tru = z.literal(true);

const terrificSymbol = Symbol('terrific');
export const terrific = z.literal(terrificSymbol);
