const dec31 = require("./31");

describe("dec31 functions correctly", () => {
  test("should shorten the sentence to the correct number of words", () => {
    expect(dec31("Hello how are you Contestant", 4)).toBe("Hello how are you");
    expect(dec31("What is the solution to this problem", 4)).toBe(
      "What is the solution"
    );
    expect(dec31("chopper is not a tanuki", 5)).toBe("chopper is not a tanuki");
  });
});
