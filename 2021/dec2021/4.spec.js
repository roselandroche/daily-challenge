const dec4 = require("./4");

describe("dec4 challenge functional", () => {
  test("if array has multiple elements, should return array with zeroes moved to end", () => {
    expect(dec4([0, 1, 0, 3, 12])).toStrictEqual([1, 3, 12, 0, 0]);
    expect(dec4([0, 77, 343, 2, 662, 75, 0, 345, 0, 1000])).toStrictEqual([
      77, 343, 2, 662, 75, 345, 1000, 0, 0, 0,
    ]);
  });
  test("if array has one element of 0, should return same array", () => {
    expect(dec4([0])).toStrictEqual([0]);
  });
});
