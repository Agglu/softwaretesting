import compact from "../src/compact.js";

describe('compact', () => {
  test('"0", false and ""', () => {
    input = [0, 1, false, 2, "", 3]
    expect(compact(input)).toBe([1, 2, 3]);
  });

  test('null, undefined and NaN', () => {
    input = [null, undefined, NaN, 4, 5]
    expect(compact(input)).toBe([4, 5]);
  });
});
