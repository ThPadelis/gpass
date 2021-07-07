const createPassword = require("../utils/createPassword");
const isBetween = require("../utils/isBetween");

test("should create password", () => {
  const password = createPassword();
  expect(password.length).toBe(10);
});

test("should have minimum eight characters, at least one letter and one number", () => {
  const password = createPassword(12, true, false);
  let _pass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  expect(_pass).toBeTruthy();
});

test("should have minimum eight characters, at least one letter, one number and one special character", () => {
  const password = createPassword(15, true, true);
  let _pass =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );
  expect(_pass).toBeTruthy();
});
