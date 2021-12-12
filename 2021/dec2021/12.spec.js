const dec12 = require("./12");

describe("dec12 solution successful", () => {
  test("should return decoded string", () => {
    expect(dec12("G()(al)")).toStrictEqual("Goal");
    expect(dec12("G()()()()(al)")).toStrictEqual("Gooooal");
    expect(dec12("(al)G(al)()()G")).toStrictEqual("alGalooG");
  });
});
