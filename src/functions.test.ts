import { ZodError } from 'zod';
import { plus, trimmedLength } from './functions';

describe('Functions', () => {
  describe('implement', () => {
    test('trimmed length', () => {
      expect(trimmedLength('sandwich')).toBe(8);
    });
    test('plus', () => {
      expect(plus(2)).toBe(3);
    });
    test('Invalid function arguments', () => {
      expect(() => plus(11)).toThrow(ZodError);
    });
  });
});
