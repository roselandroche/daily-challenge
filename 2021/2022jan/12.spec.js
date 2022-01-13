const jan12 = require("./12");

describe("jan12 functions correctly", () => {
  test("should return the amount of odd values after manipulation", () => {
    expect(
      jan12(2, 3, [
        [0, 1],
        [1, 1],
      ])
    ).toBe(6);
    expect(
      jan12(2, 2, [
        [1, 1],
        [0, 0],
      ])
    ).toBe(0);
  });
});
