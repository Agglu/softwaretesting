import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
  test("returns the default value when the input is null", () => {
    expect(defaultTo(null, 10)).toBe(10);
  });

  test("return default value when the input is not null", () => {
    expect(defaultTo(1, 10)).toBe(1);
  });
});
