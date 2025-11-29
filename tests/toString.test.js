import toString from "../src/toString.js";

describe("toString", () => {
  test("undefined and null to an empty string", () => {
    expect(toString(undefined)).toBe("");
    expect(toString(null)).toBe("");
  });

  test("[1, 2, 3] to '1,2,3'", () => {
    expect(toString([1, 2, 3])).toBe("1,2,3");
  });
});
