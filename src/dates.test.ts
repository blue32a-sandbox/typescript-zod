import { ZodError } from 'zod';
import * as d from './dates';

describe('Dates', () => {
  describe('date', () => {
    test('parse', () => {
      expect(d.date.safeParse(new Date()).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => d.date.parse('2022-01-12T00:00:00.000Z')).toThrow(ZodError);
    });
  });
  describe('date min', () => {
    test('parse', () => {
      expect(d.min.safeParse(new Date('2023-03-02')).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => d.min.parse(new Date('2023-02-28'))).toThrow('Too old');
    });
  });
  describe('date max', () => {
    test('parse', () => {
      expect(d.max.safeParse(new Date('2023-02-28')).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => d.max.parse(new Date('2023-03-10'))).toThrow('Too young');
    });
  });
  describe('coerce date', () => {
    test('parse', () => {
      expect(d.coerce.safeParse('2023-01-10T00:00:00.000Z').success).toBe(true);
      expect(d.coerce.safeParse('2023-01-10').success).toBe(true);
      expect(d.coerce.safeParse('1/10/23').success).toBe(true);
      expect(d.coerce.safeParse(new Date('1/10/23')).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => d.coerce.parse('2023-13-10')).toThrow(ZodError);
    });
  });
});
