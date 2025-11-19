import ceil from "../src/ceil.js";

describe("ceil", () => {
  test("ceil(4.006) -> 5", () => {
    expect(ceil(4.006)).toBe(5);
  });

  test("ceil(6.004, 2) -> 6.01", () => {
    expect(ceil(6.004, 2)).toBe(6.01);
  });

  test("ceil(6040, -2) -> 6100", () => {
    expect(ceil(6040, -2)).toBe(6100);
  });

  test("ceil(0) -> 0", () => {
    expect(ceil(0)).toBe(0);
  });

  test("ceil(-4.006) -> -4", () => {
    expect(ceil(-4.006)).toBe(-4);
  });

  test("ceil(NaN) -> NaN", () => {
    expect(ceil(NaN)).toBeNaN();
  });
});
