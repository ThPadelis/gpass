const createPIN = require("../utils/createPIN");
const isBetween = require("../utils/isBetween");

const pin = createPIN();
test("should create PIN", () => {
  expect(pin.length).toBe(4);
});

test("should be valid PIN", () => {
  let isNumber = /^\d+$/.test(pin);
  let hasValidLength = isBetween(pin.length, true);
  expect(isNumber).toBeTruthy();
  expect(hasValidLength).toBeTruthy();
});
