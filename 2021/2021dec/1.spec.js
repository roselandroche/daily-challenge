const dec1 = require("./1");

describe("dec1 challenge", () => {
  test("should return 0 if needle is empty string", () => {
    expect(dec1("sugar", "")).toBe(0);
    expect(dec1("tree", "")).toBe(0);
    expect(dec1("fortitude", "")).toBe(0);
  });

  test("should return -1 if no needle in haystack, or if haystack is empty string", () => {
    expect(dec1("", "fudge")).toBe(-1);
    expect(dec1("dog", "splendid")).toBe(-1);
    expect(dec1("cordial", "xx")).toBe(-1);
  });

  test("should return first index of needle within haystack if it exists", () => {
    expect(dec1("hello", "ll")).toBe(2);
    expect(dec1("lotion", "ion")).toBe(3);
    expect(dec1("explorer", "lore")).toBe(3);
  });
});
