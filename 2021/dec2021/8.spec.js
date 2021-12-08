const dec8 = require("./8");

describe("dec8 returns ans containing original array twice", () => {
  test("should return ans with correct contents and length", () => {
    expect(dec8([1, 2, 1])).toStrictEqual([1, 2, 1, 1, 2, 1]);
    expect(dec8([1, 2, 1])).toHaveLength(6);
    expect(dec8([1, 3, 2, 1])).toStrictEqual([1, 3, 2, 1, 1, 3, 2, 1]);
    expect(dec8([1, 3, 2, 1])).toHaveLength(8);
  });
});
