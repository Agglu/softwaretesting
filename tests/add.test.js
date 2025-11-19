import add from "assignment-lib/src/add.js";

describe("add", () => {
  test("add(6, 4) should return 10", () => {
    expect(add(6, 4)).toBe(10);
  });

  test("add(-3, 7) should return 4", () => {
    expect(add(-3, 7)).toBe(4);
  });
  test("add(-5, -10) should return -15", () => {
    expect(add(-5, -10)).toBe(-15);
  });

  test("add(0, 0) should return 0", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("add(1.2, 3.4) should return 4.6", () => {
    expect(add(1.2, 3.4)).toBe(4.6);
  });

  test("add(null, 5) should return 5", () => {
    expect(add(null, 5)).toBe(5);
  });

  test("add(undefined, 2) should return NaN", () => {
    expect(add(undefined, 2)).toBeNaN();
  });

  test("add() should be zero", () => {
    expect(add()).toBe(0);
  });

  test("add(k,3) should return NaN", () => {
    expect(add("k", 3)).toBeNaN();
  });
});
