import { z } from 'zod';

export const opstr = z.optional(z.string());
type OptionalString = z.infer<typeof opstr>; // string | undefined

export const user = z.object({
  username: z.string().optional(),
});
type User = z.infer<typeof user>; // { username?: string | undefined }

export const unwrapped = opstr.unwrap();
