import { ZodError } from 'zod';
import { mySchema, User } from './basic';

describe('Basic usage', () => {
  describe('my schema', () => {
    test('文字列 tuna のパースは成功する', () => {
      const result = mySchema.parse('tuna');
      expect(result).toBe('tuna');
    });
    test('数値 12 のパースはエラーが発生する', () => {
      expect(() => {
        mySchema.parse(12);
      }).toThrow(ZodError);
    });
    test('文字列 tuna のセーフパースは成功を返す', () => {
      const result = mySchema.safeParse('tuna');
      expect(result.success).toBe(true);
    });
    test('数値 12 のセーフパースは失敗を返す', () => {
      const result = mySchema.safeParse(12);
      expect(result.success).toBe(false);
    });
  });
  describe('user', () => {
    test('オブジェクト { username: "Ludwig" } のパースは成功する', () => {
      const result = User.parse({ username: "Ludwig" });
      expect(result).toEqual({ username: "Ludwig" });
    });
  });
});
