import { z } from 'zod';

export const nlstr = z.nullable(z.string());
type NullableString = z.infer<typeof nlstr>; // string | null

export const user = z.object({
  username: z.string().nullable(),
});
type User = z.infer<typeof user>; // { username: string | null }

export const unwrapped = nlstr.unwrap();
