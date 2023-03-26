import { ZodError } from 'zod';
import * as arr from './arrays';

describe('Arrays', () => {
  describe('string array', () => {
    test('parse', () => {
      const strs = ['tuna', 'salmon'];
      expect(arr.stringArray.parse(strs)).toEqual(strs);
    });
    test('parse error', () => {
      expect(() => arr.stringArray.parse([1, 2])).toThrow();
    });
  });
  describe('element', () => {
    test('parse', () => {
      expect(arr.strArrElement.parse('tuna')).toBe('tuna');
    });
  });
  describe('nonempty', () => {
    test('parse error', () => {
      expect(() => arr.strArrNonempty.parse([])).toThrow("Can't be empty!");
    });
  });
  describe('min', () => {
    test('parse', () => {
      expect(arr.minFive.safeParse([1, 2, 3, 4, 5]).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => arr.minFive.parse([1, 2, 3, 4])).toThrow(ZodError);
    });
  });
  describe('max', () => {
    test('parse', () => {
      expect(arr.maxFive.safeParse([1, 2, 3, 4, 5]).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => arr.maxFive.parse([1, 2, 3, 4, 5, 6])).toThrow(ZodError);
    });
  });
  describe('length', () => {
    test('parse', () => {
      expect(arr.lenFive.safeParse([1, 2, 3, 4, 5]).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => arr.lenFive.parse([1, 2, 3, 4])).toThrow(ZodError);
      expect(() => arr.lenFive.parse([1, 2, 3, 4, 5, 6])).toThrow(ZodError);
    });
  });
});
