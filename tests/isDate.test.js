import isDate from "../src/isDate.js";

describe("isDate", () => {
  test("returns true for valid date objects", () => {
    expect(isDate(new Date())).to.equal(true);
  });

  test("returns false for invalid date objects", () => {
    expect(isDate("Mon April 23 2012")).to.equal(false);
  });
});
