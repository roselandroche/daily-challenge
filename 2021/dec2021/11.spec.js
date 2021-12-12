const dec11 = require("./11");

describe("dec11 functions correctly", () => {
  test("dec11 should return decoded array", () => {
    expect(dec11([1, 2, 3], 1)).toStrictEqual([1, 0, 2, 1]);
    expect(dec11([6, 2, 7, 3], 4)).toStrictEqual([4, 2, 0, 7, 4]);
  });
});
