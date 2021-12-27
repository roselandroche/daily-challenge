const dec27 = require("./27");

describe("dec27 functions correctly", () => {
  test("should return true if pangram", () => {
    expect(dec27("thequickbrownfoxjumpsoverthelazydog")).toBe(true);
    expect(dec27("leetcode")).toBe(false);
  });
});
