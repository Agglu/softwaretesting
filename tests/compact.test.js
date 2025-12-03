import compact from "../src/compact.js";

describe('compact', () => {
  test('null', () => {
    input = [1, 2, 3, 4, null];
    result = compact(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('NaN', () => {
    input = ['foo', 'bar', NaN];
    result = compact(input);
    expect(result).toEqual(['foo', 'bar']);
  });

  test('undefined', () => {
    input = [1, undefined, 2, 3];
    expect(compact(input)).toEqual([1, 2, 3]);
  });

  test('"0"', () => {
    input = [1, 2, 3, 4, 0];
    result = compact(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('false', () => {
    input = [1, 2, 3, 4, false];
    result = compact(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });
  
  test(' "" ', () => {
    input = [1, 2, 3, 4, ""];
    result = compact(input);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
