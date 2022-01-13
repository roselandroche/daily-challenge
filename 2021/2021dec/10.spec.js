const dec10 = require("./10");

describe("dec10 functions correctly", () => {
  test("should return the sum of the array with the largest sum", () => {
    expect(
      dec10([
        [1, 2, 3],
        [3, 2, 1],
      ])
    ).toBe(6);
    expect(
      dec10([
        [1, 5],
        [7, 3],
        [3, 5],
      ])
    ).toBe(10);
    expect(
      dec10([
        [2, 8, 7],
        [7, 1, 3],
        [1, 9, 5],
      ])
    ).toBe(17);
  });
});
