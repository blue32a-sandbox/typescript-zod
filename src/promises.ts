import { z } from 'zod';

export const numberPromise = z.promise(z.number());
