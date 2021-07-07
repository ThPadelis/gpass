const isBetween = (value, isPIN = false) => {
  min = isPIN ? 3 : 6;
  max = isPIN ? 12 : 32;
  return (value - min) * (value - max) <= 0;
};

module.exports = isBetween;
