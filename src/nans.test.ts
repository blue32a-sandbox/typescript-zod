import { nan } from './nans';

describe('NaNs', () => {
  describe('nan', () => {
    test('parse', () => {
      expect(nan.parse(NaN)).toBe(NaN);
    });
    test('parse error', () => {
      expect(() => nan.parse(1)).toThrow();
    });
  });
  describe('customize error message', () => {
    test('required error', () => {
      expect(() => nan.parse(undefined)).toThrow('nan is required');
    });
    test('invalid type error', () => {
      expect(() => nan.parse(1)).toThrow('nan must be not a number');
    });
  });
});
