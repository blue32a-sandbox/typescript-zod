import { z } from 'zod';

export class Test {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

export const testSchema = z.instanceof(Test);
