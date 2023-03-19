import { z } from 'zod';

export const bool = z.boolean({
  required_error: "bool is required",
  invalid_type_error: "bool must be a boolean",
});
