import toString from "../src/toString.js";

describe("toString", () => {
  test('undefined and null to an empty string', () => {
    expect(toString(undefined)).toBe('');
    expect(toString(null)).toBe('');
  });
});