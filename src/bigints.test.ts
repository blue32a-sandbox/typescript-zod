import { ZodError } from 'zod';
import * as bi from './bigints';

describe('BigInts', () => {
  describe('gt', () => {
    test('parse', () => {
      expect(bi.gtfive.parse(6n)).toBe(6n);
    });
    test('parse error', () => {
      expect(() => bi.gtfive.parse(5n)).toThrow(ZodError);
    });
  });
  test.todo('gte');
  describe('lt', () => {
    test('parse', () => {
      expect(bi.ltfive.parse(4n)).toBe(4n);
    });
    test('parse error', () => {
      expect(() => bi.ltfive.parse(5n)).toThrow(ZodError);
    });
  });
  test.todo('lte');
  describe('positive', () => {
    test('parse', () => {
      expect(bi.positive.parse(1n)).toBe(1n);
    });
    test('parse error', () => {
      expect(() => bi.positive.parse(0n)).toThrow(ZodError);
    });
  });
  test.todo('nonnegative');
  test.todo('negative');
  test.todo('nonpositive');
  describe('multipleOf', () => {
    test('parse', () => {
      expect(bi.multipleOf.parse(10n)).toBe(10n);
      expect(bi.multipleOf.parse(15n)).toBe(15n);
    });
    test('parse error', () => {
      expect(() => bi.multipleOf.parse(9n)).toThrow();
    });
  });
});
