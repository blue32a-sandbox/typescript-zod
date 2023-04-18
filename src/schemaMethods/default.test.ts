import { ZodError } from 'zod';
import { numberWithRandomDafault, stringWithDefault } from './default';

describe('schema methods .default', () => {
  describe('string with default', () => {
    test('parse', () => {
      expect(stringWithDefault.parse(undefined)).toBe('tuna');
      expect(stringWithDefault.parse('foo')).toBe('foo');
    });
    test('parse error', () => {
      expect(() => stringWithDefault.parse(1)).toThrow(ZodError);
    });
  });
  describe('number with random default', () => {
    test('parse', () => {
      const a = numberWithRandomDafault.parse(undefined);
      const b = numberWithRandomDafault.parse(undefined);
      expect(typeof a).toBe('number');
      expect(typeof b).toBe('number');
      expect(a).not.toBe(b);
    });
  });
});
