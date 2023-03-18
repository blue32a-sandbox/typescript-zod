import { z } from 'zod';

export const gtfive = z.number().gt(5);
export const gtefive = z.number().gte(5);
export const ltfive = z.number().lt(5);
export const ltefive = z.number().lte(5);

export const int = z.number().int();

export const positive = z.number().positive();
export const nonnegative = z.number().nonnegative();
export const negative = z.number().negative();
export const nonpositive = z.number().nonpositive();

export const multipleOf = z.number().multipleOf(5);

export const finite = z.number().finite();
export const safe = z.number().safe();
