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

    test('number', () => {
      expect(capitalize(123)).toThrow();
    });

    test('array', () => {
      expect(capitalize([foo, bar])).toThrow();
    });

    test('object', () => {
      expect(capitalize({'foo': 'bar'})).toThrow();
    });

    test('undefined', () => {
      expect(capitalize(undefined)).toThrow();
    });

    test('null', () => {
      expect(capitalize(null)).toThrow();
    });
});