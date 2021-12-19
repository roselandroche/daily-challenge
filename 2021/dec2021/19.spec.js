const dec19 = require("./19");

describe("dec19 functions correctly", () => {
  test("should return the first palindrome in array", () => {
    expect(dec19(["abc", "car", "ada", "racecar", "cool"])).toBe("ada");
    expect(dec19(["notapalindrome", "racecar"])).toBe("racecar");
  });

  test("should return empty string if no palindrome exists", () => {
    expect(dec19(["def", "ghi"])).toBe("");
  });
});
