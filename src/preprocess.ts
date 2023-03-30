import { z } from 'zod';

export const castToString = z.preprocess((val) => String(val), z.string());
