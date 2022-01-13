const dec13 = require("./13");

describe("dec13 code functional", () => {
  test("dec13 code functional", () => {
    expect(dec13([1, 2, 5, 2, 3], 2)).toStrictEqual([1, 2]);
    expect(dec13([1, 2, 5, 2, 3], 3)).toStrictEqual([3]);
    expect(dec13([1, 2, 5, 2, 3], 5)).toStrictEqual([4]);
    expect(dec13([1, 2, 5, 2, 3], 4)).toStrictEqual([]);
  });
});
