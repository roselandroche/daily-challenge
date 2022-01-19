const jan18 = require("./18");

describe("jan18 functions correctly", () => {
  test("should return the max product of two elements of array", () => {
    expect(jan18([3, 4, 5, 2])).toBe(12);
    expect(jan18([1, 5, 4, 5])).toBe(16);
    expect(jan18([3, 7])).toBe(12);
  });
});
