import isDate from "../src/isDate.js";

describe('isDate', () => {
  test('returns true for valid date objects', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('returns true for valid date objects', () => {
    expect(isDate(new Date(2020, 5, 19, 22, 55))).toBe(true);
  });

  test('returns true for date object with impossible date', () => {
    expect(isDate(new Date(5))).toBe(true);
  });

  test('returns false for null or undefined date objects', () => {
    expect(isDate(new Date(null))).toBe(true);
    expect(isDate(new Date(undefined))).toBe(true);
  });

  test('returns false null and undefined', () => {
    expect(isDate(null)).toBe(false);
    expect(isDate(undefined)).toBe(false);
  });

  test('returns false for empty input', () => {
    expect(isDate()).toBe(false);
  });

  test('returns false for boolean', () => {
    expect(isDate(true)).toBe(false);
    expect(isDate(false)).toBe(false);
  });

  test('returns false for date object in an array', () => {
    expect(isDate([new Date()])).toBe(false);
  });

  test('returns false for invalid date objects', () => {
    expect(isDate('Mon April 23 2012')).toBe(false);
  });

  test('returns false for invalid date objects', () => {
    expect(isDate(12345)).toBe(false);
  });

  test('returns false for object that mimics Date', () => {
    expect(isDate({})).toBe(false);
    expect(isDate({getTime: () => 123})).toBe(false);
  });
});
