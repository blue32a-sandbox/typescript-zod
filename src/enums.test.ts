import { ZodError } from 'zod';
import * as en from './enums';

describe('Zod enums', () => {
  describe('enum', () => {
    test('parse', () => {
      expect(en.fish.parse('Salmon')).toBe('Salmon');
      expect(en.fish.parse('Tuna')).toBe('Tuna');
      expect(en.fish.parse('Trout')).toBe('Trout');
    });
    test('parse error', () => {
      expect(() => en.fish.parse('beef')).toThrow(ZodError);
    });
    test('autocomplete', () => {
      expect(en.fish.enum.Salmon).toBe('Salmon');
    });
    test('options', () => {
      expect(en.fish.options).toEqual(['Salmon', 'Tuna', 'Trout']);
    });
  });
});
