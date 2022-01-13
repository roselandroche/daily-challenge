const dec16 = require("./16");

describe("dec16 functional", () => {
  test("should return the correct count", () => {
    expect(dec16([1, 2, 2, 1], 1)).toBe(4);
    expect(dec16([1, 3], 3)).toBe(0);
    expect(dec16([3, 2, 1, 5, 4], 2)).toBe(3);
  });
});
