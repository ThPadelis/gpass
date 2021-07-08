const createPassword = require("../utils/createPassword");

test("should create password", () => {
  const password = createPassword();
  expect(password.length).toBe(10);
});

test("should have minimum eight characters, at least one letter and one number", () => {
  const password = createPassword(true, true, true, false);
  const pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  expect(pass).toBeTruthy();
});

test("should have minimum eight characters, at least one letter, one number and one special character", () => {
  const password = createPassword();
  // eslint-disable-next-line prettier/prettier
  const pass = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
  expect(pass).toBeTruthy();
});
