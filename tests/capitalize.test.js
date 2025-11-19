import capitalize from "../src/capitalize.js";

describe("capitalize", () => {
    test('string with lowercase letters', () => {
      expect(capitalize('fred')).toBe('Fred');
    });
});