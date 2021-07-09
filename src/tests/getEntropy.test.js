const createPassword = require("../utils/createPassword");
const getEntropy = require("../utils/getEntropy");

test("should return entropy", () => {
  const options = { lower: Math.random() > 0.5, upper: Math.random() > 0.5, digit: Math.random() > 0.5, symbols: Math.random() > 0.5 };
  const password = createPassword(...Object.values(options));
  const entropy = getEntropy(password);

  expect(entropy).not.toBeNaN();
  expect(typeof entropy).toBe("number");
});
