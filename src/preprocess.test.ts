import { castToString } from './preprocess';

describe('Preprocess', () => {
  describe('cast to string', () => {
    test('parse', () => {
      expect(castToString.parse('tuna')).toBe('tuna');
      expect(castToString.parse(23)).toBe('23');
      expect(castToString.parse(true)).toBe('true');
      expect(castToString.parse(null)).toBe('null');
    });
  });
});
