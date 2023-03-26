import * as obj from './objects';

describe('Objects', () => {
  describe('dog object', () => {
    test('parse', () => {
      const val = { name: 'Max', age: 3 };
      expect(obj.dog.safeParse(val).success).toBe(true);

      const val2 = { name: 'Max', age: 3, breed: 'hoge' };
      expect(obj.dog.parse(val2)).toEqual({ name: 'Max', age: 3 });
    });
    test('parse error', () => {
      expect(() => obj.dog.parse({ name: 'Max' })).toThrow();
    });
  });
  describe('shape', () => {
    test('dog name schema', () => {
      const dogName = obj.dog.shape.name;
      expect(dogName.parse('Max')).toBe('Max');
    });
  });
  describe('keyof', () => {
    test('dog key schema', () => {
      expect(obj.dogKey.parse('name')).toBe('name');
      expect(obj.dogKey.parse('age')).toBe('age');
    });
  });
  describe('extend', () => {
    test('dog with breed', () => {
      const val = { name: 'Max', age: 3, breed: 'hoge' };
      expect(obj.dogWithBreed.safeParse(val).success).toBe(true);
    });
  });
  describe('merge', () => {
    test('teacher', () => {
      const val = { id: '1', students: ['Sam', 'Jon'] };
      expect(obj.teacher.safeParse(val).success).toBe(true);
    });
  });
  describe('pick', () => {
    test('just the name', () => {
      const val = { name: 'chair' };
      expect(obj.justTheName.safeParse(val).success).toBe(true);
    });
  });
  describe('omit', () => {
    test('no ID recipe', () => {
      const val = { name: 'chair', ingredients: ['wood'] };
      expect(obj.noIDRecipe.safeParse(val).success).toBe(true);
    });
  });
  describe('partial', () => {
    test('partial user', () => {
      expect(obj.partialUser.safeParse({ email: 'foo@mail.example.com' }).success).toBe(true);
      expect(obj.partialUser.safeParse({ username: 'foobar' }).success).toBe(true);
      expect(obj.partialUser.safeParse({ deep: { str: 'tuna' } }).success).toBe(true);
      expect(obj.partialUser.safeParse({ }).success).toBe(true);
    });
    test('parse error', () => {
      expect(() => obj.partialUser.parse({ deep: {} })).toThrow();
    });
  });
  describe('deepPartial', () => {
    test('deep partial user', () => {
      expect(obj.deepPartialUser.safeParse({ location: {} }).success).toBe(true);
      expect(obj.deepPartialUser.safeParse({ strings: [{}, { value: 'tuna' }] }).success).toBe(true);
    });
  });
  describe('required', () => {
    test('required user', () => {
      const user = {
        email: 'tuna@mail.example.com',
        username: 'tunatuna',
        deep: { str: 'tuna' },
      };
      expect(obj.requiredUser.safeParse(user).success).toBe(true);
    });
    test('parse error', () => {
      const user = {
        email: 'tuna@mail.example.com',
        username: 'tunatuna',
        deep: { },
      };
      expect(() => obj.requiredUser.parse(user)).toThrow();
    });
  });
  describe('passthrough', () => {
    test('passthrough person', () => {
      const person = { name: 'bob dylan', extraKey: 58 };
      expect(obj.passthroughPerson.parse(person)).toEqual(person);
    });
  });
  describe('strict', () => {
    test('strict person', () => {
      const person = { name: 'bob dylan', extraKey: 58 };
      expect(() => obj.strictPerson.parse(person)).toThrow();
    });
  });
  describe('strip', () => {
    test('strip person', () => {
      const person = { name: 'bob dylan', extraKey: 58 };
      expect(obj.stripPerson.parse(person)).toEqual({ name: 'bob dylan' });
    });
  });
  describe('catchall', () => {
    test('catchall person', () => {
      const person = { name: 'bob dylan', extraKey: 58 };
      expect(obj.catchallPerson.parse(person)).toEqual(person);
    });
    test('parse error', () => {
      const person = { name: 'bob dylan', extraKey: false };
      expect(() => obj.catchallPerson.parse(person)).toThrow();
    });
  });
});
