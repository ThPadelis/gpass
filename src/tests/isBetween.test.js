const isBetween = require("../utils/isBetween");

test("should have valid length for password", () => {
  const number = Math.floor(Math.random() * (32 - 6 + 1) + 6);
  const result = isBetween(number, false);
  expect(result).toBeTruthy();
});

test("should have valid length for PIN", () => {
  const number = Math.floor(Math.random() * (12 - 3 + 1) + 3);
  const result = isBetween(number, true);
  expect(result).toBeTruthy();
});
