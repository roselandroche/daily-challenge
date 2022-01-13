const jan7 = require("./7");

describe("jan7 functions correctly", () => {
  test("jan7 returns the highest altitude the climber reaches", () => {
    expect(jan7([-5, 1, 5, 0, -7])).toBe(1);
    expect(jan7([-4, -3, -2, -1, 4, 3, 2])).toBe(0);
  });
});
