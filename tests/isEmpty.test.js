import isEmpty from "../src/isEmpty.js";

describe('isEmpty', () => {
  test('returns true for undefined', () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  test('returns true for null', () => {
    expect(isEmpty(null)).toBe(true);
  });

  test('returns true for NaN', () => {
    expect(isEmpty(NaN)).toBe(true);
  });

  test('returns true for boolean', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('returns true for 1 and -1', () => {
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(-1)).toBe(true);
  });

  test('returns true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('returns false for objects that are not empty', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

  test('returns false for strings with characters', () => {
    expect(isEmpty('abc')).toBe(false);
  });

  test('returns true for empty strings', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('returns true for empty arrays', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('returns false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
    expect(isEmpty([null])).toBe(false);
  });

  test('returns true for functions', () => {
    function testFunc() {}
    expect(isEmpty(testFunc)).toBe(true);
  });

  test('returns true for empty map', () => {
    expect(isEmpty(new Map())).toBe(true);
  });

  test('returns true for empty set', () => {
    expect(isEmpty(new Set())).toBe(true);
  });

  test('returns false for non-empty map', () => {
    const map = new Map();
    map.set('key', 'value');
    expect(isEmpty(map)).toBe(false);
  });

  test('returns false for non-empty set', () => {
    const set = new Set();
    set.add('foo');
    expect(isEmpty(set)).toBe(false);
  });

  test('returns true for empty buffers', () => {
    const buffer = Buffer.alloc(0);
    expect(isEmpty(buffer)).toBe(true);
  });

  test('returns false for non-empty buffers', () => {
    const buffer = Buffer.from([1, 2, 3]);
    expect(isEmpty(buffer)).toBe(false);
  });

  test('returns true for empty arguments object', () => {
    function emptyArgs(){ return isEmpty(arguments); }
    expect(emptyArgs()).toBe(true);
  });

  test('returns false for non-empty arguments', () => {
    function argsFilled(){ return isEmpty(arguments); }
    expect(argsFilled(1)).toBe(false);
  });

  test('returns true prototype without properties', () => {
    function Foo(){}
    expect(isEmpty(Foo.prototype)).toBe(true);
  });

  test('returns false for prototype with properties', () => {
    function Foo(){}
    Foo.prototype.bar = 1;
    expect(isEmpty(Foo.prototype)).toBe(false);
  });
});
