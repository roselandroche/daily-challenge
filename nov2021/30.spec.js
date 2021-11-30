const nov30 = require("./30");

test("removes all occurrences of val correctly", () => {
  expect(nov30([3, 2, 2, 3], 3)).toBe(2, [2, 2, "", ""]);
  expect(nov30([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5, [
    0,
    1,
    4,
    0,
    3,
    "",
    "",
    "",
  ]);
});
