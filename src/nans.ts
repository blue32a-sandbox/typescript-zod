import { z } from 'zod';

export const nan = z.nan({
  required_error: "nan is required",
  invalid_type_error: "nan must be not a number",
});
