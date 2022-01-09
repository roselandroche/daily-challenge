const jan9 = require("./9");

describe("jan9 functions correctly", () => {
  test("should return the correct number", () => {
    expect(
      jan9([
        [5, 8],
        [3, 9],
        [5, 12],
        [16, 5],
      ])
    ).toBe(3);
    expect(
      jan9([
        [2, 3],
        [3, 7],
        [4, 3],
        [3, 7],
      ])
    ).toBe(3);
  });
});
