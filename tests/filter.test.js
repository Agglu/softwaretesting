import filter from "../src/filter.js";

describe("filter", () => {
    test("should return X", () => {
        const users = [
            { 'user': 'matti', 'active': true },
            { 'user': 'pekka', 'active': false }
          ];

        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{"active": true, "user": "matti"}]);
      });
});