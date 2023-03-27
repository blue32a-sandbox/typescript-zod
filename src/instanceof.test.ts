import { ZodError } from 'zod';
import { Test, testSchema } from './instanceof';

describe('Instanceof', () => {
  describe('Test class', () => {
    test('parse', () => {
      expect(testSchema.safeParse(new Test('tuna')).success).toBe(true);
    });
    test('parse error', () => {
      const value: any = 'whatever';
      expect(() => testSchema.parse(value)).toThrow(ZodError);
    });
  });
});
