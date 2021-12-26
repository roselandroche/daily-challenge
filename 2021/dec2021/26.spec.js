const dec26 = require("./dec26");

describe("dec26 functions correctly", () => {
  test("should return the number of strings that only have allowed chars", () => {
    expect(dec26("ab", ["ad", "bd", "aaab", "baa", "badab"])).toBe(2);
    expect(dec26("abc", ["a", "b", "c", "ab", "ac", "bc", "abc"])).toBe(7);
    expect(
      dec26("cad", ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"])
    ).toBe(4);
  });
});
