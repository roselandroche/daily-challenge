const dec20 = require("./20");

describe("dec20 functions correctly", () => {
  test("should return correct number of matches", () => {
    expect(dec20(14)).toBe(13);
    expect(dec20(7)).toBe(6);
  });
});
