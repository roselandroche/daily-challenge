const dec2 = require("./2");

describe("dec2 challenge", () => {
  test("should return 0 if target would be inserted as first element", () => {
    expect(dec2([1, 3, 5, 6], 0)).toBe(0);
    expect(dec2([1], 0)).toBe(0);
  });
  test("should return last index + 1 if target would be inserted as last element", () => {
    expect(dec2([1, 3, 5, 6], 7)).toBe(4);
    expect(dec2([1, 3, 5, 6], 94)).toBe(4);
  });
  test("should return correct index if target exists", () => {
    expect(dec2([1, 3, 5, 6], 5)).toBe(2);
    expect(dec2([1, 3, 5, 6], 1)).toBe(0);
  });
  test("should return correct index if target does not exist", () => {
    expect(dec2([1, 3, 5, 6], 2)).toBe(1);
    expect(dec2([1, 3, 5, 6], 4)).toBe(2);
  });
});
