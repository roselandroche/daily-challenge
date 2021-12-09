const dec9 = require("./9");

describe("dec9 challenge correctly interprets operations, returns correct value after operations", () => {
  test("should return correct value of x", () => {
    expect(dec9(["--X", "X++", "X++"])).toBe(1);
    expect(dec9(["++X", "++X", "X++"])).toBe(3);
    expect(dec9(["X++", "++X", "--X", "X--"])).toBe(0);
  });
});
