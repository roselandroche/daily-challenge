const jan15 = require("./15");

describe("jan15 functions correctly", () => {
  test("return new version of string", () => {
    expect(jan15("abcdefd", "d")).toBe("dcbaefd");
    expect(jan15("xyxzxe", "z")).toBe("zxyxxe");
    expect(jan15("abcd", "z")).toBe("abcd");
  });
});
