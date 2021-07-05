const createPassword = (length = 10, hasNumbers = true, hasSymbols = true) => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = lowerCase.toUpperCase();
  const letters = `${lowerCase}${upperCase}`;
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()-_=+";

  let chars = letters;
  hasNumbers ? (chars += numbers) : "";
  hasSymbols ? (chars += symbols) : "";

  return generatePassword(length, chars);
};

const generatePassword = (length, chars) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

module.exports = createPassword;
