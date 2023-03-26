import { myUnion } from './discriminatedUnions';

describe('Discriminated unions', () => {
  describe('my union', () => {
    test('parse success', () => {
      const success = { status: 'success', data: 'yippie ki yay' };
      expect(myUnion.safeParse(success).success).toBe(true);
    });
    test('parse failed', () => {
      const failed = { status: 'failed', error: new Error() };
      expect(myUnion.safeParse(failed).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => myUnion.parse({ status: 'success' })).toThrow();
    });
  });
});
