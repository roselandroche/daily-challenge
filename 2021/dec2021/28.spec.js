const dec28 = require("./28");

describe("dec28 functions correctly", () => {
  test("should return the max possible difference", () => {
    expect(dec28([5, 6, 2, 7, 4])).toBe(34);
    expect(dec28([4, 2, 5, 9, 7, 4, 8])).toBe(64);
  });
});
