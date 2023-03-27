import { ZodError } from 'zod';
import { categorySchema } from './recursiveTypes';

describe('Recursive types', () => {
  describe('category', () => {
    test('parse', () => {
      const value = {
        name: 'People',
        subcategories: [
          {
            name: 'Politicians',
            subcategories: [
              {
                name: 'Presidents',
                subcategories: [],
              },
            ],
          },
        ],
      };
      expect(categorySchema.safeParse(value).success).toBe(true);
    });
    test('parse error', () => {
      const value = {
        name: 'People',
        subcategories: [
          {
            name: 'Politicians',
            subcategories: [
              {
                name: 'Presidents',
              },
            ],
          },
        ],
      };
      expect(() => categorySchema.parse(value)).toThrow(ZodError);
    });
  });
});
