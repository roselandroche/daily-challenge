const dec18 = require("./18");

describe("dec18 functions correctly", () => {
  test("should return the lowest count to have change values in array1 to be equal to array 2", () => {
    expect(dec18([3, 1, 5], [2, 7, 4])).toBe(4);
    expect(dec18([4, 1, 5, 9], [1, 3, 2, 6])).toBe(7);
    expect(dec18([2, 2, 6, 6], [1, 3, 2, 6])).toBe(4);
  });
});
