import { ZodError } from 'zod';
import { strNumMap } from './maps';

describe('Maps', () => {
  describe('string number map', () => {
    test('parse', () => {
      const map = new Map([
        ['foo', 1],
        ['bar', 2],
      ]);
      expect(strNumMap.safeParse(map).success).toBe(true);
    });
    test('parse error', () => {
      const map = new Map([
        [1, 'foo'],
        [2, 'bar'],
      ]);
      expect(() => strNumMap.parse(map)).toThrow(ZodError);
    });
  });
});
