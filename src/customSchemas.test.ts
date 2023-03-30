import { ZodError } from 'zod';
import { px } from './customSchemas';

describe('Custom schemas', () => {
  describe('pixel', () => {
    test('parse', () => {
      expect(px.parse('38px')).toBe('38px');
    });
    test('parse error', () => {
      expect(() => px.parse('38vw')).toThrow(ZodError);
    });
  });
});
