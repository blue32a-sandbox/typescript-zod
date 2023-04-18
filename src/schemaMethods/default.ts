import { z } from 'zod';

export const stringWithDefault = z.string().default('tuna');

export const numberWithRandomDafault = z.number().default(Math.random);

