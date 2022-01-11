const jan11 = require("./11");

describe("jan11 functions correctly", () => {
  test("returns the largest common denominator of min and max of array", () => {
    expect(jan11([2, 5, 6, 9, 10])).toBe(2);
    expect(jan11([7, 5, 6, 8, 3])).toBe(1);
    expect(jan11([3, 3])).toBe(3);
  });
});
