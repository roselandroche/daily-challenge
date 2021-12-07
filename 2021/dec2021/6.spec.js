const dec6 = require("./6");

describe("dec 6 solution is functional ", () => {
  test("should return array of correct indices", () => {
    expect(dec6([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
    expect(dec6([2, 3, 4], 6)).toStrictEqual([1, 3]);
    expect(dec6([-1, 0], -1)).toStrictEqual([1, 2]);
  });
});
