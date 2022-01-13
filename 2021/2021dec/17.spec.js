const dec17 = require("./17.js");

describe("dec17 functional", () => {
  test("returns center node", () => {
    expect(
      dec17([
        [1, 2],
        [2, 3],
        [4, 2],
      ])
    ).toBe(2);
    expect(
      dec17([
        [1, 2],
        [5, 1],
        [1, 3],
        [1, 4],
      ])
    ).toBe(1);
  });
});
