const jan13 = require("./13");

describe("jan13 functions correctly", () => {
  test("should return the number of steps needed to make the array increasing", () => {
    expect(jan13([1, 1, 1])).toBe(3);
    expect(jan13([1, 5, 2, 4, 1])).toBe(14);
    expect(jan13([8])).toBe(0);
  });
});
