const jan6 = require("./6");

describe("jan6 functions correctly", () => {
  test("should return reversed and inverted array of arrays", () => {
    expect(
      jan6([
        [1, 1, 0],
        [1, 0, 1],
        [0, 0, 0],
      ])
    ).toStrictEqual([
      [1, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ]);
    expect(
      jan6([
        [1, 1, 0, 0],
        [1, 0, 0, 1],
        [0, 1, 1, 1],
        [1, 0, 1, 0],
      ])
    ).toStrictEqual([
      [1, 1, 0, 0],
      [0, 1, 1, 0],
      [0, 0, 0, 1],
      [1, 0, 1, 0],
    ]);
  });
});
