import { ZodError } from 'zod';
import * as l from './literals';

describe('Literals', () => {
  describe('tuna', () => {
    test('get value', () => {
      expect(l.tuna.value).toBe('tuna');
    });
    test('parse', () => {
      expect(l.tuna.parse('tuna')).toBe('tuna');
      expect(() => {
        l.tuna.parse('hoge');
      }).toThrow(ZodError);
    });
  });
  test.todo('twelve');
  test.todo('twobig');
  test.todo('tru');
  test.todo('terrific');
});
