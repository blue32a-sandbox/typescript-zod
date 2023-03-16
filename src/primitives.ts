import { z } from 'zod';

// primitive values
export const str = z.string();
export const num = z.number();
export const bigi = z.bigint();
export const bool = z.boolean();
export const date = z.date();
export const symb = z.symbol();

// empty types
export const undef = z.undefined();
export const nul = z.null();
export const vid = z.void();

// catch-all types
export const an = z.any();
export const unkn = z.unknown();

// never type
export const nev = z.never();
