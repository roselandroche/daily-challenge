const jan8 = require("./8");

describe("jan8 functions correctly", () => {
  test("should return the number of substrings that exist in the word out of the list", () => {
    expect(jan8(["a", "abc", "bc", "d"], "abc")).toBe(3);
    expect(jan8(["a", "b", "c"], "aaaaabbbbb")).toBe(2);
    expect(jan8(["a", "a", "a"], "ab")).toBe(3);
  });
});
