const isBetween = (value, isPIN = false) => {
  const min = isPIN ? 3 : 6;
  const max = isPIN ? 12 : 32;
  return (value - min) * (value - max) <= 0;
};

module.exports = isBetween;
