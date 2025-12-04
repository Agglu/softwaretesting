import drop from "../src/drop.js";

describe("drop", () => {
  test('default drop (1 element)', () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });

  test('first 2 elements', () => {
    expect(drop([1, 2, 3], 2)).toEqual([3]);
  });

  test('more items than array has', () => {
    expect(drop([1, 2, 3], 5)).toEqual([]);
  });

  test('zero items', () => {
    expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  test('negative items', () => {
    expect(drop([1, 2, 3], -2)).toEqual([1, 2, 3]);
  });

  test('empty arrays', () => {
    expect(drop([], 2)).toEqual([]);
  });

  test('null and undefined', () => {
    expect(drop(null, 2)).toEqual([]);
    expect(drop(undefined, 2)).toEqual([]);
  });

  test('NaN as a "n" (0)', () => {
    expect(drop([1, 2, 3, 4], NaN)).toEqual([1, 2, 3, 4]);
  });

  test('handle float "n"s by converting to integer', () => {
    expect(drop([1, 2, 3], 1.7)).toEqual([3]);
  });

  test('string input as "n"', () => {
    expect(drop([1, 2, 3], '2')).toEqual([3]);
  });

  test('object instead of array should throw', () => {
    expect(() => drop({a: 1, b: 2}, 1)).toThrow(TypeError);
  });

  test('integer instead of array should throw', () => {
    expect(() => drop(1, 1)).toThrow(TypeError);
  });

  test('string instead of array should throw', () => {
    expect(() => drop('foo bar', 1)).toThrow(TypeError);
  });
});
