const { lower, upper, number, symbol } = require("../utils/getRandom");

test("should return a lowercase letter", () => {
  const letter = lower();
  const result = !!letter.match(/[a-z]+/);
  expect(result).toBeTruthy();
});

test("should return an uppercase letter", () => {
  const letter = upper();
  const result = !!letter.match(/[A-Z]+/);
  expect(result).toBeTruthy();
});

test("should return a number", () => {
  const num = number();
  const result = !!num.match(/[0-9]+/);
  expect(result).toBeTruthy();
});

test("should return a special character", () => {
  const sym = symbol();
  const result = !!sym.match(/[^ \w]+/g);
  expect(result).toBeTruthy();
});
