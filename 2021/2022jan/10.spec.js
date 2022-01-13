const jan10 = require("./10");

describe("jan10 functions correctly", () => {
  test("should return true if first and second half of string have same number of vowels", () => {
    expect(jan10("book")).toBe(true);
    expect(jan10("textbook")).toBe(false);
  });
});
