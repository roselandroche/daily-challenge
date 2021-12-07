const dec7 = require("./7");

describe("dec7 functional", () => {
  test("should return new array matching pattern", () => {
    expect(dec7([0, 2, 1, 5, 3, 4])).toStrictEqual([0, 1, 2, 4, 5, 3]);
    expect(dec7([5, 0, 1, 2, 3, 4])).toStrictEqual([4, 5, 0, 1, 2, 3]);
  });
});
