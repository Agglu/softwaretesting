/**
 * AI-generated test suite for `add` (AI-assisted)
 * This file contains property-based and randomized checks generated with AI help.
 * It verifies algebraic properties, random samples, and edge cases.
 */
import add from "../../src/add.js";

describe("AI-generated tests for add (AI-assisted)", () => {
  test("random numeric equality: add(a,b) ~ a + b", () => {
    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < 200; i++) {
      const a = rand(-1e6, 1e6);
      const b = rand(-1e6, 1e6);
      const expected = a + b;
      // use toBeCloseTo for floating rounding stability
      expect(add(a, b)).toBeCloseTo(expected, 10);
    }
  });

  test("commutativity: add(a,b) === add(b,a)", () => {
    for (let i = 0; i < 200; i++) {
      const a = (Math.random() - 0.5) * 1e4;
      const b = (Math.random() - 0.5) * 1e4;
      expect(add(a, b)).toBeCloseTo(add(b, a), 12);
    }
  });

  test("associativity: add(add(a,b),c) === add(a, add(b,c)) (float-tolerant)", () => {
    for (let i = 0; i < 200; i++) {
      const a = (Math.random() - 0.5) * 1e3;
      const b = (Math.random() - 0.5) * 1e3;
      const c = (Math.random() - 0.5) * 1e3;
      const left = add(add(a, b), c);
      const right = add(a, add(b, c));
      expect(left).toBeCloseTo(right, 10);
    }
  });

  test("identity with 0 and null", () => {
    const vals = [0, 1.2, -3.4, 1e6, -1e6];
    for (const v of vals) {
      expect(add(v, 0)).toBeCloseTo(v, 12);
      expect(add(0, v)).toBeCloseTo(v, 12);
    }
    // The implementation in assignment-lib treats null as 0 for add
    expect(add(null, 5)).toBe(5);
  });

  test("NaN and Infinity behavior", () => {
    expect(add(NaN, 1)).toBeNaN();
    expect(add(1, NaN)).toBeNaN();
    expect(add(Infinity, 1)).toBe(Infinity);
    expect(add(-Infinity, 1)).toBe(-Infinity);
  });
});
