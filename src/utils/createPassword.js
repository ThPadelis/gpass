const getRandom = require("./getRandom");

/**
 * Shuffles array in place
 * @param {String[]} array
 * @returns {String[]}
 */
const shuffleArray = (array) =>
  array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

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

  const passwordArray = generatedPassword.split("");
  const password = shuffleArray(passwordArray).join("");
  return password.slice(0, length);
};

module.exports = createPassword;
