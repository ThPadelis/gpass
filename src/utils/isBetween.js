const isBetween = (value, isPIN = false, min = 1, max = 32) => {
  min = isPIN ? 3 : 6;
  max = isPIN ? 12 : 32;
  return (value - min) * (value - max) <= 0;
};

module.exports = isBetween;
