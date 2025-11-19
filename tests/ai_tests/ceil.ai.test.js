/**
 * AI-generated test suite for `ceil` (AI-assisted)
 * Contains randomized checks and property-based tests to validate precision and
 * behavior at boundaries. Produced with AI assistance.
 */
import ceil from "../../src/ceil.js";

describe("AI-generated tests for ceil (AI-assisted)", () => {
  test("random integers and decimals against Math.ceil for default precision", () => {
    for (let i = 0; i < 200; i++) {
      const v = (Math.random() - 0.5) * 1e6;
      // assignment-lib's ceil with single argument should match Math.ceil
      expect(ceil(v)).toBe(Math.ceil(v));
    }
  });

  test("precision behavior: ceil(x, precision) consistency checks", () => {
    // random positive and negative numbers
    for (let i = 0; i < 200; i++) {
      const x = (Math.random() - 0.5) * 1e6;
      const p = Math.floor((Math.random() - 0.5) * 6); // precision between -3..2
      const res = ceil(x, p);
      // reverse engineer by shifting decimal and applying Math.ceil
      const factor = Math.pow(10, p);
      const expected =
        p >= 0
          ? Math.ceil(x * factor) / factor
          : Math.ceil(x / Math.pow(10, -p)) * Math.pow(10, -p);
      // Use toBeCloseTo for floating imprecision
      expect(res).toBeCloseTo(expected, 10);
    }
  });

  test("special values", () => {
    expect(ceil(0)).toBe(0);
    expect(ceil(-4.006)).toBe(-4);
    expect(ceil(NaN)).toBeNaN();
  });
});
