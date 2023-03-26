import { ZodError } from 'zod';
import * as set from './sets';

describe('Sets', () => {
  describe('number set', () => {
    test('parse', () => {
      const val = new Set([1, 2]);
      expect(set.numSet.safeParse(val).success).toBe(true);
    });
    test('parse error', () => {
      const val = new Set(['a', 'b']);
      expect(() => set.numSet.parse(val)).toThrow(ZodError);
    });
  });
  describe('nonempty', () => {
    test('parse', () => {
      const val = new Set(['a', 'b']);
      expect(set.nonempty.safeParse(val).success).toBe(true);
    });
    test('parse error', () => {
      const val = new Set();
      expect(() => set.nonempty.parse(val)).toThrow(ZodError);
    });
  });
  describe('min 5', () => {
    test('parse', () => {
      const val = new Set(['a', 'b', 'c', 'd', 'e']);
      expect(set.minFive.safeParse(val).success).toBe(true);
    });
    test('parse error', () => {
      const val = new Set(['a', 'b', 'c', 'd']);
      expect(() => set.minFive.parse(val)).toThrow(ZodError);
    });
  });
  describe('max 5', () => {
    test('parse', () => {
      const val = new Set(['a', 'b', 'c', 'd', 'e']);
      expect(set.maxFive.safeParse(val).success).toBe(true);
    });
    test('parse error', () => {
      const val = new Set(['a', 'b', 'c', 'd', 'e', 'f']);
      expect(() => set.maxFive.parse(val)).toThrow(ZodError);
    });
  });
  describe('size 5', () => {
    test('parse', () => {
      const val = new Set(['a', 'b', 'c', 'd', 'e']);
      expect(set.sizeFive.safeParse(val).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => set.sizeFive.parse(new Set(['a', 'b', 'c', 'd']))).toThrow(ZodError);
      expect(() => set.sizeFive.parse(new Set(['a', 'b', 'c', 'd', 'e', 'f']))).toThrow(ZodError);
    });
  });
});
