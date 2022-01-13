const dec14 = require("./14");

describe("dec14 functional", () => {
  test("should return correct count of matching key and value", () => {
    expect(
      dec14(
        [
          ["phone", "blue", "pixel"],
          ["computer", "silver", "lenovo"],
          ["phone", "gold", "iphone"],
        ],
        "color",
        "silver"
      )
    ).toBe(1);
    expect(
      dec14(
        [
          ["phone", "blue", "pixel"],
          ["computer", "silver", "lenovo"],
          ["phone", "gold", "iphone"],
        ],
        "type",
        "phone"
      )
    ).toBe(2);
  });
});
