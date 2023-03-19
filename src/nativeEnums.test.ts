import { ZodError } from 'zod';
import * as nen from './nativeEnums';

describe('Native enums', () => {
  describe('Numeric enums', () => {
    test('parse', () => {
      expect(nen.fruit.parse(nen.Fruits.Apple)).toBe(nen.Fruits.Apple);
      expect(nen.fruit.parse(nen.Fruits.Banan)).toBe(nen.Fruits.Banan);
      expect(nen.fruit.parse(0)).toBe(nen.Fruits.Apple);
      expect(nen.fruit.parse(1)).toBe(nen.Fruits.Banan);
    });
    test('parse error', () => {
      expect(() => nen.fruit.parse(2)).toThrow(ZodError);
    });
  });
  describe('String enums', () => {
    test('parse', () => {
      expect(nen.fishe.parse(nen.Fishes.Salmon)).toBe(nen.Fishes.Salmon);
      expect(nen.fishe.parse('salmon')).toBe(nen.Fishes.Salmon);
      expect(nen.fishe.parse(0)).toBe(nen.Fishes.Trout);
    });
    test('parse error', () => {
      expect(() => nen.fishe.parse('trout')).toThrow(ZodError);
    });
  });
  describe('Const enums', () => {
    test('parse', () => {
      expect(nen.meat.parse(nen.Meats.Beef)).toBe(nen.Meats.Beef);
      expect(nen.meat.parse('pork')).toBe(nen.Meats.Pork);
      expect(nen.meat.parse(3)).toBe(nen.Meats.Chikien);
    });
    test('parse error', () => {
      expect(() => nen.meat.parse('chikien')).toThrow(ZodError);
    });
  });
});
