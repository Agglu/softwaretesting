import add from "assignment-lib/src/add.js";

describe("add", () => {
  test("add(6, 4) should return 10", () => {
    expect(add(6, 4)).toBe(10);
  });

  test("add(-3, 7) should return 4", () => {
    expect(add(-3, 7)).toBe(4);
  });
});
