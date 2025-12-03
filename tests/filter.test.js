import filter from "../src/filter.js";

describe('filter', () => {
    test('empty arrays', () => {
      expect(filter([], () => true)).toEqual([]);
    });

    test('null', () => {
      expect(filter(null, () => true)).toEqual([]);
    });

    test('undefined', () => {
      expect(filter(undefined, () => true)).toEqual([]);
    });

    test('array based on predicate', () => {
      const users = [
        { 'user': 'matti', 'active': true },
        { 'user': 'pekka', 'active': false }
      ];

      const result = filter(users, ({ active }) => active);
      expect(result).toEqual([{'active': true, 'user': 'matti'}]);
    });

    test('returns empty array when items with matching predicate is not found', () => {
      const users = [
        { 'user': 'matti', 'active': false },
        { 'user': 'pekka', 'active': false }
      ];

      const result = filter(users, ({ active }) => active);
      expect(result).toEqual([[]]);
    });

    test('returns similar array when all items have matching predicate', () => {
      const users = [
        { 'user': 'matti', 'active': true },
        { 'user': 'pekka', 'active': true }
      ];

      const result = filter(users, ({ active }) => active);
      expect(result).toEqual(users);
    });

    test('', () => {
      const users = [];
      const result = filter(users, ({ active }) => active);
      expect(result).toEqual([[]]);
    });

    test('should throw an error when predicate is not a function', () => {
      const array = ['matti', 'teppo', 'pekka'];
      expect(() => filter(array, null)).toThrow(TypeError);
      expect(() => filter(array, undefined)).toThrow(TypeError);
      expect(() => filter(array, 'not a function')).toThrow(TypeError);
    });
});