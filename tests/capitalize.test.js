import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
    test('empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('string with lowercase letters', () => {
      expect(capitalize('foo')).toBe('Foo');
    });

    test('string with uppercase letters', () => {
      expect(capitalize('FOO')).toBe('Foo');
    });

    test('capitalized string', () => {
      expect(capitalize('Bar')).toBe('Bar');
    });

    test('string with uppercase characters', () => {
      expect(capitalize('bAr')).toBe('Bar');
    });

    test('string that starts with numbers', () => {
      expect(capitalize('1STRING')).toBe('1string');
    });

    test('string that has numbers in it', () => {
      expect(capitalize('STRING1')).toBe('String1');
    });

    test('string with whitespaces', () => {
      expect(capitalize('FOO BAR')).toBe('Foo bar');
    });
    /*
    test('strings with special characters', () => {
      expect(capitalize('!STRING')).toBe('!string');
    });

    test('strings with unicode characters', () => {
      expect(capitalize('überbrüllen')).toBe('Überbrüllen');
    });*/

    test('boolean', () => {
      expect(capitalize(true)).toBe('True');
      expect(capitalize(false)).toBe('False');
    });

    test('number', () => {
      // expect(() => capitalize(123)).toThrow();
      expect(capitalize(123)).toBe('123')
    });

    test('array', () => {
      // expect(() => capitalize(['foo', 'bar'])).toThrow();
      expect(capitalize(['foo', 'bar'])).toBe('Foo,bar')
    });

    test('object', () => {
      // expect(() => capitalize({'foo': 'bar'})).toThrow();
      expect(capitalize({'foo': 'bar'})).toBe('[object object]')
    });

    test('undefined', () => {
      // expect(() => capitalize(undefined)).toThrow();
      expect(capitalize(undefined)).toBe('Undefined')
    });

    test('null', () => {
      // expect(() => capitalize(null)).toThrow();
      expect(capitalize(null)).toBe('Null')
    });
});