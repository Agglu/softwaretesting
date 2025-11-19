import drop from "assignment-lib/src/drop.js";

describe("drop", () => {
  test("drop([1,2,3]", () => {
    expect(drop([1, 2, 3])).toEqual([2, 3]);
  });
});
