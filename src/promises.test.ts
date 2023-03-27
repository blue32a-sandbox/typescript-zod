import { ZodError } from 'zod';
import { numberPromise } from './promises';

describe('Promises', () => {
  describe('number promise', () => {
    test('parse', async () => {
      expect.assertions(1);
      return numberPromise.parse(Promise.resolve(3.14)).then(value => {
        expect(value).toBe(3.14);
      });
    });
    test('parse error', async () => {
      expect.assertions(2);
      expect(() => numberPromise.parse('tuna')).toThrow();
      await numberPromise.parse(Promise.resolve('tuna'))
        .catch(e => expect(e).toBeInstanceOf(ZodError));
        expect.assertions(2);
    });
  });
});
