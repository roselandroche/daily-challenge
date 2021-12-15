const dec15 = require("./15");

describe("dec15 functional", () => {
  test("should return properly ordered string", () => {
    expect(dec15("pTY1")).toBe("pTY");
    expect(dec15("Myself2 Me1 I4 and3")).toBe("Me Myself and I");
    expect(dec15("is2 sentence4 This1 a3")).toBe("This is a sentence");
    expect(dec15("AztiTqB1 fULtMGHcyvJPGo2 V3")).toBe(
      "AztiTqB fULtMGHcyvJPGo V"
    );
  });
});
