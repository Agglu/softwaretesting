import defaultTo from "../src/defaultTo.js";

describe('defaultTo', () => {
  // value is NOT NaN, null or undefined
  test('return default value when the input is not null', () => {
    expect(defaultTo(1, 10)).toBe(1);
  });

  test('return default value when the input is not null', () => {
    expect(defaultTo('foo', 'bar')).toBe('foo');
  });

  test('return default value when the input is not null', () => {
    expect(defaultTo([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3]);
  });

  // value is NaN, null or undefined
  test('returns the default value when the input is NaN', () => {
    expect(defaultTo(NaN, 'foo')).toBe('foo');
  });

  test('returns the default value when the input is null', () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test('returns the default value when the input is undefined', () => {
    expect(defaultTo(undefined, [1, 2, 3])).toEqual([1, 2, 3]);
  });

  // both are null
  test('returns null', () => {
    expect(defaultTo(null, null)).toBe(null);
  });
});
