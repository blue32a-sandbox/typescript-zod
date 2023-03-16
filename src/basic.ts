import { z } from 'zod';

export const mySchema = z.string();

export const User = z.object({
  username: z.string(),
});

export type User = z.infer<typeof User>;
