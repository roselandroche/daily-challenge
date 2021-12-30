const dec30 = require("./30");

describe("dec30 functions correctly", () => {
  test("should return the number of rods with all three colors of rings", () => {
    expect(dec30("B0B6G0R6R0R6G9")).toBe(1);
    expect(dec30("B0R0G0R9R0B0G0")).toBe(1);
    expect(dec30("G4")).toBe(0);
  });
});
