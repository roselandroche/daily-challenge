const dec29 = require("./29");

describe("dec29 functions correctly", () => {
  test("should return the number of words in the string with the most words", () => {
    expect(
      dec29([
        "alice and bob love leetcode",
        "i think so too",
        "this is great thanks very much",
      ])
    ).toBe(6);
    expect(dec29(["please wait", "continue to fight", "continue to win"])).toBe(
      3
    );
  });
});
