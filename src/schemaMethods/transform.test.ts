import { emailToDomain, idToUser, nameToGreeting, numberInString, stringToNumber } from './transform';

describe('schema methods .transform', () => {
  describe('string to number', () => {
    test('parse', () => {
      expect(stringToNumber.parse('string')).toBe(6);
      expect(stringToNumber.parse('tuna')).toBe(4);
    });
  });
  describe('chaining order', () => {
    test('parse', () => {
      expect(emailToDomain.parse('hoge.fuga@example.com')).toBe('example.com');
    });
  });
  describe('validating during transform', () => {
    test('parse', () => {
      expect(numberInString.parse('123')).toBe(123);
    });
    test('parse error', () => {
      expect(() => numberInString.parse('abc')).toThrow('Not a number');
    });
  });
  describe('relationship to refinements', () => {
    test('parse', () => {
      expect(nameToGreeting.parse('arnold schwarzenegger'))
        .toBe('Hello ARNOLD SCHWARZENEGGER');
    });
    test('parse error', () => {
      expect(() => nameToGreeting.parse('arnold')).toThrow();
      expect(() => nameToGreeting.parse('arnold schwarzenegger!')).toThrow();
    });
  });
  describe('async transforms', () => {
    test('parse', async () => {
      const id = 'da0054d6-e0e9-4ea1-ba0c-3f891d1a35fb';
      expect(await idToUser.parseAsync(id)).toEqual({ id, name: 'hoge' });
    });
  });
});
