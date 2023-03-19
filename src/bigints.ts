import { z } from 'zod';

export const gtfive = z.bigint().gt(5n);
export const gtefive = z.bigint().gte(5n);
export const ltfive = z.bigint().lt(5n);
export const ltefive = z.bigint().lte(5n);

export const positive = z.bigint().positive(); // > 0n
export const nonnegative = z.bigint().nonnegative(); // >= 0n
export const negative = z.bigint().negative(); // < 0n
export const nonpositive = z.bigint().nonpositive(); // <= 0n

export const multipleOf = z.bigint().multipleOf(5n); // Evenly divisible by 5n.
