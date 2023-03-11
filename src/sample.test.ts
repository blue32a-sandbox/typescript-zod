import { str } from './sample';

describe('string', () => {
  test('It is a string', () => {
    expect(str.parse('hoge')).toBe('hoge');
  });
  test('It is not a string', () => {
    expect(() => {
      str.parse(123);
    }).toThrow('Expected string, received number');
  });
});

