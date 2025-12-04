import toString from "../src/toString.js";

describe('toString', () => {
  test('undefined and null to an empty string', () => {
    expect(toString(undefined)).toBe('');
    expect(toString(null)).toBe('');
  });

  test('NaN', () => {
    expect(toString(NaN)).toBe('NaN');
  });

  // Boolean values
  test('boolean', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('integer', () => {
    expect(toString(500)).toBe('500');
  });

  test('negative integer', () => {
    expect(toString(-1)).toBe('-1');
  });

  test('float', () => {
    expect(toString(6.7)).toBe('6.7');
  });

  test('string', () => {
    expect(toString('string')).toBe('string');
    expect(toString('')).toBe('');
    // emoji
    expect(toString('😄')).toBe('😄');
  });

  test('array', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString([])).toBe('');
  });

  test('object', () => {
    expect({'hello': 'world'}).toBe('[object Object]');
  });

  test('symbol', () => {
    expect(toString(Symbol('foo'))).toBe('Symbol(foo)');
  });
});
