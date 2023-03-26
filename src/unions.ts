import { z } from 'zod';

export const strOrNum = z.union([z.string(), z.number()]);
type StringOrNumber = z.infer<typeof strOrNum>; // string | number

// equivalent
// const strOrNum = z.string().or(z.number());

export const optionalUrl = z.union([z.string().url().nullish(), z.literal('')]);
type OptionalUrl = z.infer<typeof optionalUrl>; // string | null | undefined
