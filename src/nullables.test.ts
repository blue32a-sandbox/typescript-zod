import { ZodError } from 'zod';
import * as nullable from './nullables';

describe('Nullables', () => {
  describe('nullable string', () => {
    test('parse', () => {
      expect(nullable.nlstr.parse('tuna')).toBe('tuna');
      expect(nullable.nlstr.parse(null)).toBe(null);
    });
  });
  describe('nullable username', () => {
    test('parse', () => {
      expect(nullable.user.safeParse({ username: 'Jon' }).success).toBe(true);
      expect(nullable.user.safeParse({ username: null }).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => nullable.user.parse({ })).toThrow(ZodError);
    });
  });
  describe('nullable string unwrap', () => {
    test('parse', () => {
      expect(nullable.unwrapped.parse('tuna')).toBe('tuna');
    });
    test('parse error', () => {
      expect(() => nullable.unwrapped.parse(undefined)).toThrow(ZodError);
    });
  });
});
