import { ZodError } from 'zod';
import { strMax10, arrMax3 } from './refine';

describe('schema methods .refine', () => {
  describe('string max 10 characters', () => {
    test('parse', () => {
      expect(strMax10.safeParse('abcdefghij').success).toBe(true);
    });
    test('parse error', () => {
      expect(() => strMax10.parse('abcdefghijk')).toThrow("String can't be more than 10 characters");
    });
  });
  describe('array max 3 length', () => {
    test('parse', () => {
      expect(arrMax3.safeParse(['a', 'b', 'c']).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => arrMax3.parse(['a', 'b', 'c', 'd'])).toThrow(ZodError);
    });
  });
});
