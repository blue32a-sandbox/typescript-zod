import { bool } from './booleans';

describe('Booleans', () => {
  describe('customize error message', () => {
    test('required error', () => {
      expect(() => bool.parse(undefined)).toThrow('bool is required');
    });
    test('invalid type error', () => {
      expect(() => bool.parse('tuna')).toThrow('bool must be a boolean');
    });
  });
});
