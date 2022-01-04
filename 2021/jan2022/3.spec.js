const jan3 = require("./3");

describe("jan3 functions correctly", () => {
  test("should return the amount of unique morse code combinations possible from an array of strings", () => {
    expect(jan3(["gin", "zen", "gig", "msg"])).toBe(2);
    expect(jan3(["a"])).toBe(1);
  });
});
