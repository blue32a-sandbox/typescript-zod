import { ZodError } from 'zod';
import * as num from './numbers';

describe('Numbers', () => {
  describe('gt', () => {
    test('parse', () => {
      expect(num.gtfive.parse(6)).toBe(6);
    });
    test('parse error', () => {
      expect(() => num.gtfive.parse(5)).toThrow(ZodError);
    });
  });
  describe('gte', () => {
    test('parse', () => {
      expect(num.gtefive.parse(5)).toBe(5);
    });
    test('parse error', () => {
      expect(() => num.gtefive.parse(4)).toThrow(ZodError);
    });
  });
  describe('lt', () => {
    test('parse', () => {
      expect(num.ltfive.parse(4)).toBe(4);
    });
    test('parse error', () => {
      expect(() => num.ltfive.parse(5)).toThrow(ZodError);
    });
  });
  describe('lte', () => {
    test('parse', () => {
      expect(num.ltefive.parse(5)).toBe(5);
    });
    test('parse error', () => {
      expect(() => num.ltefive.parse(6)).toThrow(ZodError);
    });
  });
  describe('int', () => {
    test('parse', () => {
      expect(num.int.parse(5)).toBe(5);
    });
    test('parse error', () => {
      expect(() =>num.int.parse(3.14)).toThrow(ZodError);
    });
  });
  describe('positive', () => {
    test('parse', () => {
      expect(num.positive.parse(1)).toBe(1);
    });
    test('parse error', () => {
      expect(() => num.positive.parse(0)).toThrow(ZodError);
    });
  });
  test.todo('nonnegative');
  describe('negative', () => {
    test('parse', () => {
      expect(num.negative.parse(-1)).toBe(-1);
    });
    test('parse error', () => {
      expect(() => num.negative.parse(0)).toThrow(ZodError);
    });
  });
  test.todo('nonpositive');
  describe('multipleOf', () => {
    test('parse', () => {
      expect(num.multipleOf.parse(10)).toBe(10);
      expect(num.multipleOf.parse(15)).toBe(15);
    });
    test('parse error', () => {
      expect(() => num.negative.parse(9)).toThrow(ZodError);
    });
  });
  describe('finite', () => {
    test('parse', () => {
      expect(num.finite.parse(5)).toBe(5);
      expect(num.finite.parse(-5)).toBe(-5);
    });
    test('parse error', () => {
      expect(() => num.finite.parse(Infinity)).toThrow(ZodError);
      expect(() => num.finite.parse(-Infinity)).toThrow(ZodError);
    });
  });
  describe('safe', () => {
    test('parse', () => {
      expect(num.safe.parse(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER);
      expect(num.safe.parse(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER);
    });
    test('parse error', () => {
      expect(() => num.safe.parse(Number.MAX_SAFE_INTEGER + 1)).toThrow(ZodError);
      expect(() => num.safe.parse(Number.MIN_SAFE_INTEGER - 1)).toThrow(ZodError);
    });
  });
});
