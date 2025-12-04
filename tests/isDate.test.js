import isDate from "../src/isDate.js";

describe('isDate', () => {
  test('returns true for valid date objects', () => {
    expect(isDate(new Date())).toBe(true);
  });

  test('returns true for date object with impossible date', () => {
    expect(isDate(new Date(50-50-1900))).toBe(true);
  });

  test('returns false for null or undefined date objects', () => {
    expect(isDate(new Date(null))).toBe(false);
    expect(isDate(new Date(undefined))).toBe(false);
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
    expect(isDate(24-12-2025)).toBe(false);
  });
});
