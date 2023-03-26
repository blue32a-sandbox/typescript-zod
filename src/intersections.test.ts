import { employedPerson } from './intersections';

describe('Intersections', () => {
  describe('employed person', () => {
    test('parse', () => {
      expect(employedPerson.safeParse({ name: 'alice', role: 'manager'}).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => employedPerson.parse({ name: 'alice' })).toThrow();
    });
  });
});
