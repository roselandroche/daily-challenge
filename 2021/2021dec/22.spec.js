const dec22 = require("./22");

describe("dec22 functions correctly", () => {
  test("should return a boolean determinating if string version of arrays are equal", () => {
    expect(dec22(["ab", "c"], ["a", "bc"])).toBe(true);
    expect(dec22(["a", "cb"], ["ab", "c"])).toBe(false);
    expect(dec22(["abc", "d", "defg"], ["abcddefg"])).toBe(true);
  });
});
