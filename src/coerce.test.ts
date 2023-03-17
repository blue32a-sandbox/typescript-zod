import { ZodError } from 'zod';
import { cbool, cnum, cstr } from './coerce';

describe('Coercion for primitives', () => {
  describe('coerce string', () => {
    test('parse string', () => {
      const result = cstr.parse('tuna');
      expect(result).toBe('tuna');
    });
    test('parse number', () => {
      const result = cstr.parse(12);
      expect(result).toBe('12');
    });
    test('parse boolean', () => {
      const result = cstr.parse(true);
      expect(result).toBe('true');
    });
  });
  describe('coerce number', () => {
    test('parse number', () => {
      const result = cnum.parse(12);
      expect(result).toBe(12);
    });
    test('parse boolean', () => {
      const result = cnum.parse(true);
      expect(result).toBe(1);
    });
    test('parse string', () => {
      expect(() => {
        cnum.parse('tuna');
      }).toThrow(ZodError);
    });
  });
  describe('coerce boolean', () => {
    test('parse string', () => {
      expect(cbool.parse('tuna')).toBe(true);
      expect(cbool.parse('true')).toBe(true);
      expect(cbool.parse('false')).toBe(true);
    });
    test('parse number', () => {
      expect(cbool.parse(1)).toBe(true);
      expect(cbool.parse(0)).toBe(false);
    });
    test('parse array', () => {
      expect(cbool.parse([])).toBe(true);
    });
    test('parse undefined', () => {
      expect(cbool.parse(undefined)).toBe(false);
    });
    test('parse null', () => {
      expect(cbool.parse(null)).toBe(false);
    });
  });
  test.todo('coerce bigint');
  test.todo('coerce date');
});
