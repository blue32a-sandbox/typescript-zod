import { z } from 'zod';

// validations
export const maxfive = z.string().max(5);
export const minfive = z.string().min(5);
export const lenfive = z.string().length(5);
export const email = z.string().email();
export const url = z.string().url();
export const emoji = z.string().emoji();
export const uuid = z.string().uuid();
export const cuid = z.string().cuid();
export const cuid2 = z.string().cuid2();
export const ulid = z.string().ulid();
export const regex = z.string().regex(/[a-zA-Z]/);
export const includes = z.string().includes('tuna');
export const startsWith = z.string().startsWith('tuna');
export const endsWith = z.string().endsWith('tuna');
export const datetime = z.string().datetime();
export const ip = z.string().ip();

// transformations
export const trim = z.string().trim();
export const lower = z.string().toLowerCase();
export const upper = z.string().toUpperCase();

// custom error message
export const name = z.string({
  required_error: 'Name is required',
  invalid_type_error: 'Name must be a string',
});
export const cemail = z.string().email({ message: 'Invalid email address' });
