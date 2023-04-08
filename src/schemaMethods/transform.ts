import { z } from 'zod';

export const stringToNumber = z.string().transform((val) => val.length);
type StringToNumber = z.infer<typeof stringToNumber>; // number

// Chaining order
export const emailToDomain = z
  .string()
  .email()
  .transform((val) => val.split('@')[1]);

// Validating during transform
export const numberInString = z.string().transform((val, ctx) => {
  const parsed = parseInt(val);
  if (isNaN(parsed)) {
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: 'Not a number',
    });

    return z.NEVER;
  }
  return parsed;
});

// Relationship to refinements
export const nameToGreeting = z
  .string()
  .transform((val) => val.toUpperCase())
  .refine((val) => val.length > 15)
  .transform((val) => `Hello ${val}`)
  .refine((val) => val.indexOf('!') === -1);

// Async transforms
export const idToUser = z
  .string()
  .uuid()
  .transform(async (id) => {
    return await getUserById(id);
  });

function getUserById(id: string) {
  return Promise.resolve({ id, name: 'hoge' });
}
