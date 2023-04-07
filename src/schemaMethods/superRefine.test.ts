import { strings } from './superRefine';

describe('schema methods .superRefine', () => {
  describe('strings', () => {
    test('parse', () => {
      expect(strings.safeParse(['a', 'b', 'c']).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => strings.parse(['a', 'b', 'c', 'd'])).toThrow('Too many items 😡');
      expect(() => strings.parse(['a', 'a'])).toThrow('No duplicates allowed.');
    });
  });
});
