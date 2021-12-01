const challenge27 = require("./27");

test("function returns true if string has valid brackets", () => {
  expect(challenge27("()")).toBe(true);
  expect(challenge27("()[]{}")).toBe(true);
  expect(challenge27("{[]}")).toBe(true);
});

test("function returns false if string has invalid brackets", () => {
  expect(challenge27("(]")).toBe(false);
  expect(challenge27("([)]")).toBe(false);
  expect(challenge27("(()")).toBe(false);
});
