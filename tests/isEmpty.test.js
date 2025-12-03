import isEmpty from "../src/isEmpty.js";

describe("isEmpty", () => {
  test("returns true for empty objects", () => {
    expect(isEmpty({})).toBe(true);
  });

  test("returns false for objects that are not empty", () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test("Returns false for strings with characters", () => {
    expect(isEmpty("abc")).toBe(false);
  });

  test("Returns true for empty strings", () => {
    expect(isEmpty("")).toBe(true);
  });
});
