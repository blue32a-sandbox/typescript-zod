import * as tuple from './tuples';

describe('Tuples', () => {
  describe('athlete tuple', () => {
    test('parse', () => {
      const bob = ['bob dylan', 21, { pointsScored: 12.5 }];
      expect(tuple.athlete.safeParse(bob).success).toBe(true);
    });
  });
  describe('variadic', () => {
    test('parse', () => {
      expect(tuple.variadic.safeParse(['hello']).success).toBe(true);
      expect(tuple.variadic.safeParse(['hello', 1]).success).toBe(true);
      expect(tuple.variadic.safeParse(['hello', 1, 2]).success).toBe(true);
    });
  });
});
