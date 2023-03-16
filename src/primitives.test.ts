import { ZodError } from 'zod';
import * as prim from './primitives';

describe('Primitives', () => {
  describe('primitive values', () => {
    test('string', () => {
      expect(prim.str.parse('hoge')).toBe('hoge');
    });
    test('number', () => {
      expect(prim.num.parse(33.4)).toBe(33.4);
    });
    test('bigint', () => {
      expect(prim.bigi.parse(1n)).toBe(1n);
    });
    test('boolean', () => {
      expect(prim.bool.parse(false)).toBe(false);
    });
    test('date', () => {
      expect(prim.date.parse(new Date('2023-03-16 00:00:00')))
        .toEqual(new Date('2023-03-16 00:00:00'));
    });
    test('symbol', () => {
      const result = prim.symb.parse(Symbol('Sym'));
      expect(result.toString()).toBe(Symbol('Sym').toString());
    });
  });
  describe('empty types', () => {
    test('undefined', () => {
      expect(prim.undef.parse(undefined)).toBe(undefined);
    });
    test('null', () => {
      expect(prim.nul.parse(null)).toBe(null);
    });
  });
  describe('catch-all types', () => {
    test('any', () => {
      expect(prim.an.parse('abc')).toBe('abc');
    });
    test('unknown', () => {
      expect(prim.unkn.parse(123)).toBe(123);
    });
  });
  describe('never types', () => {
    test('never', () => {
      expect(() => {
        prim.nev.parse('abc');
      }).toThrow(ZodError);
    });
  });
});
