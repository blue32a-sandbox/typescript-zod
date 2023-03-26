import { ZodError } from 'zod';
import * as uni from './unions';

describe('Unions', () => {
  describe('string or number', () => {
    test('parse', () => {
      expect(uni.strOrNum.parse('tuna')).toBe('tuna');
      expect(uni.strOrNum.parse(12)).toBe(12);
    });
  });
  describe('Optional string validation', () => {
    test('parse', () => {
      expect(uni.optionalUrl.safeParse(undefined).success).toBe(true);
      expect(uni.optionalUrl.safeParse(null).success).toBe(true);
      expect(uni.optionalUrl.safeParse('').success).toBe(true);
      expect(uni.optionalUrl.safeParse('https://zod.dev').success).toBe(true);
    });
    test('parse error', () => {
      expect(() => uni.optionalUrl.parse('not a valid url')).toThrow(ZodError);
    });
  });
});
