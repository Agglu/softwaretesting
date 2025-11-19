import isDate from "../src/isDate.js";

describe("isDate", () => {
    test('returns false for objects that are not empty', () => {
        expect(isDate(new Date)).to.equal(true)
    });
});