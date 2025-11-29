import compact from "../src/compact.js";

describe("compact", () => {
  test("compact([0,1,false,2,'',3])", () => {
    expect(compact([0, 1, false, 2, "", 3])).toEqual([1, 2, 3]);
  });

  test("compact([null,undefined,NaN,4,5])", () => {
    expect(compact([null, undefined, NaN, 4, 5])).toEqual([4, 5]);
  });
});
