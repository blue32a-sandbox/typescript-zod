import { z } from 'zod';

export const cstr = z.coerce.string();
export const cnum = z.coerce.number();
export const cbool = z.coerce.boolean();
export const cbigi = z.coerce.bigint();
export const cdate = z.coerce.date();
