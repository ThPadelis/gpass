const isBetween = (value, isPIN = false) => {
  const val = +value;
  const min = isPIN ? 3 : 6;
  const max = isPIN ? 12 : 32;
  return (val - min) * (val - max) <= 0;
};

module.exports = isBetween;
