import ceil from "../src/ceil.js";

describe("ceil", () => {
  test('NaN input', () => {
    expect(ceil(NaN)).toBeNaN();
    expect(ceil(NaN, 2)).toBeNaN();
  });

  test('null and undefined', () => {
    expect(ceil(null)).toBe(0);
    expect(ceil(undefined)).toBeNaN();
  });

  test('zero', () => {
    expect(ceil(0)).toBe(0);
  });

  test('rounds up to nearest integer', () => {
    expect(ceil(4.006)).toBe(5);
  });

  test('returns same when already round number', () => {
    expect(ceil(6)).toBe(6);
    expect(ceil(6.0)).toBe(6);
  });

  test('works with negative integers', () => {
    expect(ceil(-6.1)).toBe(-6);
    expect(ceil(-6.8)).toBe(-6);
  });

  test('works with coerced precision number', () => {
    expect(ceil(6.006, '2')).toBe(6.01);
  });

  test('positive precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(1.2345, 3)).toBe(1.235);
  });

  test('negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(75, -1)).toBe(80);
  });

  test('does not work with non-numbers', () => {
    expect(ceil([1, 2, 3])).toBe(1);
    expect(ceil('foo')).toBe(NaN);
    expect(ceil(true)).toBe(NaN);
    expect(() => ceil([1])).toThrow();
    expect(() => ceil('foo')).toThrow();
    expect(() => ceil(true)).toThrow();
  });

  test('does not work with non-integer precision', () => {
    expect(ceil(5.5, 1.5)).toBe(NaN);
    expect(ceil(5.5, -1.5)).toBe(NaN);
    expect(() => ceil(5.5, 1.5)).toThrow();
    expect(() => ceil(5.5, -1.5)).toThrow();
  });
});
