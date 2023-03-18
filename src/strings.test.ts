import { ZodError } from 'zod';
import * as str from './strings';

describe('Strings', () => {
  describe('max 5', () => {
    test('parse', () => {
      expect(str.maxfive.parse('abcde')).toBe('abcde');
    });
    test('parse error', () => {
      expect(() => str.maxfive.parse('abcdef')).toThrow(ZodError);
    })
  });
  describe('min 5', () => {
    test('parse', () => {
      expect(str.minfive.parse('abcde')).toBe('abcde');
    });
    test('parse error', () => {
      expect(() => str.minfive.parse('abcd')).toThrow(ZodError);
    });
  });
  describe('length 5', () => {
    test('parse', () => {
      expect(str.lenfive.parse('abcde')).toBe('abcde');
    });
    test('parse error', () => {
      expect(() => str.lenfive.parse('abcd')).toThrow(ZodError);
      expect(() => str.lenfive.parse('abcdef')).toThrow(ZodError);
    });
  });
  describe('email', () => {
    test('parse', () => {
      expect(str.email.parse('hoge@mail.example.com')).toBe('hoge@mail.example.com');
    });
    test('parse error', () => {
      expect(() => str.email.parse('tuna')).toThrow(ZodError);
    });
  });
  test.todo('url');
  test.todo('emoji');
  test.todo('uuid');
  test.todo('cuid');
  test.todo('cuid2');
  test.todo('ulid');
  test.todo('regex');
  test.todo('includes');
  test.todo('starts with');
  test.todo('ends with');
  describe('datetime', () => {
    test('parse', () => {
      expect(str.datetime.parse('2020-01-01T00:00:00Z')).toBe('2020-01-01T00:00:00Z');
      expect(str.datetime.parse('2020-01-01T00:00:00.123Z')).toBe('2020-01-01T00:00:00.123Z');
      expect(str.datetime.parse('2020-01-01T00:00:00.123456Z')).toBe('2020-01-01T00:00:00.123456Z');
    });
    test('parse error', () => {
      expect(() => str.datetime.parse('2020-01-01T00:00:00+02:00')).toThrow(ZodError);
    });
  });
  describe('IP address', () => {
    test('parse', () => {
      expect(str.ip.parse('192.168.1.1')).toBe('192.168.1.1');
      expect(str.ip.parse('84d5:51a0:9114:1855:4cfa:f2d7:1f12:7003')).toBe('84d5:51a0:9114:1855:4cfa:f2d7:1f12:7003');
      expect(str.ip.parse('84d5:51a0:9114:1855:4cfa:f2d7:1f12:192.168.1.1')).toBe('84d5:51a0:9114:1855:4cfa:f2d7:1f12:192.168.1.1');
    });
    test('parse error', () => {
      expect(() => str.ip.parse('256.1.1.1')).toThrow(ZodError);
    });
  });
  describe('trim', () => {
    test('" tuna " to tuna', () => {
      expect(str.trim.parse(' tuna ')).toBe('tuna');
    });
  });
  describe('toLowerCase', () => {
    test('TUNA to tuna', () => {
      expect(str.lower.parse('TUNA')).toBe('tuna');
    });
  });
  describe('toUpperCase', () => {
    test('tuna to TUNA', () => {
      expect(str.upper.parse('tuna')).toBe('TUNA');
    });
  });
  describe('custom error message', () => {
    test('Name is required', () => {
      expect(() => str.name.parse(undefined)).toThrow('Name is required');
    });
    test('Name must be a string', () => {
      expect(() => str.name.parse(123)).toThrow('Name must be a string');
    });
    test('Invalid email address', () => {
      expect(() => str.cemail.parse('tuna')).toThrow('Invalid email address');
    });
  });
});