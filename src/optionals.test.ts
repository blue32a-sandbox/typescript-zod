import { ZodError } from 'zod';
import * as op from './optionals';

describe('Optionals', () => {
  describe('optional string', () => {
    test('parse', () => {
      expect(op.opstr.parse('tuna')).toBe('tuna');
      expect(op.opstr.parse(undefined)).toBe(undefined);
    });
  });
  describe('optional username', () => {
    test('parse', () => {
      expect(op.user.safeParse({ username: 'Jon' }).success).toBe(true);
      expect(op.user.safeParse({ }).success).toBe(true);
    });
  });
  describe('optional string unwrap', () => {
    test('parse', () => {
      expect(op.unwrapped.parse('tuna')).toBe('tuna');
    });
    test('parse error', () => {
      expect(() => op.unwrapped.parse(undefined)).toThrow(ZodError);
    });
  });
});
