const jan1 = require("./1");

describe("jan1 functions correctly", () => {
  test("should return the correct string", () => {
    expect(jan1("a1c1e1")).toBe("abcdef");
    expect(jan1("a1b2c3d4e")).toBe("abbdcfdhe");
  });
});
