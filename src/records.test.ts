import { noEmptyKeys, numCache } from './records';

describe('Records', () => {
  describe('value type', () => {
    test('parse', () => {
      expect(numCache.safeParse({ foo: 1, bar: 2 }).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => numCache.parse({ foo: 1, bar: 'a'})).toThrow();
    });
  });
  describe('key and value type', () => {
    test('parse', () => {
      expect(noEmptyKeys.safeParse({ count: 1 }).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => noEmptyKeys.parse({ '': 1 })).toThrow();
    });
  });
});
