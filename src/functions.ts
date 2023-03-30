import { z } from 'zod';

const myFunc = z.function();
type MyFunc = z.infer<typeof myFunc>; // (...args: unknown[]) => unknown

const myFunc2 = z.function()
  .args(z.string(), z.number())
  .returns(z.boolean());
// (args_0: string, args_1: number, ...args_2: unknown[]) => boolean
type MyFunc2 = z.infer<typeof myFunc2>;
const myFunc2ParamsSchema = myFunc2.parameters();
const myFunc2ReturnTypeSchema = myFunc2.returnType();

export const trimmedLength = z.function()
  .args(z.string())
  .returns(z.number())
  .implement((x) => {
    return x.trim().length;
  });

export const plus = z.function()
  .args(z.number().max(10))
  .implement((n) => n + 1);
