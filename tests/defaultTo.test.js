import defaultTo from "../src/defaultTo.js";

describe("defaultTo", () => {
    test('returns the default value when the input is null', () => {
        expect(defaultTo(null, 10)).toBe(10);
      });
});