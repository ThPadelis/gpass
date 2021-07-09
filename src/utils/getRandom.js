const getRandomLower = () => String.fromCharCode(Math.floor(Math.random() * 26) + 97);

const getRandomUpper = () => String.fromCharCode(Math.floor(Math.random() * 26) + 65);

const getRandomNumber = () => String.fromCharCode(Math.floor(Math.random() * 10) + 48);

const getRandomSymbol = () => {
  const symbols = "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const getRandom = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

module.exports = getRandom;
