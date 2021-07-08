const getRandom = require("./getRandom");

const createPassword = (lower = true, upper = true, number = true, symbol = true, length = 10) => {
  let generatedPassword = "";
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter((item) => Object.values(item)[0]);

  if (typesCount === 0) return "";

  for (let i = 0; i < length; i += typesCount) {
    for (let j = 0; j < typesArr.length; j++) {
      const element = typesArr[j];
      const name = Object.keys(element)[0];
      generatedPassword += getRandom[name]();
    }
  }

  return generatedPassword.slice(0, length);
};

module.exports = createPassword;
