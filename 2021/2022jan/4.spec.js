const jan4 = require("./4");

describe("jan4 functions correctly", () => {
  test("should return a modified version of the original string", () => {
    expect(jan4("(()())(())")).toBe("()()()");
    expect(jan4("(()())(())(()(()))")).toBe("()()()()(())");
    expect(jan4("()()")).toBe("");
  });
});
