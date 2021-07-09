const toBoolean = (val) => Boolean(val);

const getEntropy = (value) => {
  const hasLower = String(value).match(/[a-z]/);
  const hasUpper = String(value).match(/[A-Z]/);
  const hasDigit = String(value).match(/\d/);
  const hasSpecial = String(value).match(/[\W_]/);

  let pool = 0;
  if (toBoolean(hasLower)) pool += 26;
  if (toBoolean(hasUpper)) pool += 26;
  if (toBoolean(hasDigit)) pool += 10;
  if (toBoolean(hasSpecial)) pool += 32;
  const { length } = String(value);
  const result = length * Math.log2(pool);
  const entropy = Math.round((result + Number.EPSILON) * 100) / 100;
  return entropy;
};

module.exports = getEntropy;
