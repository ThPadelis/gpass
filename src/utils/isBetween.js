const isBetween = (value, min = 1, max = 32) => {
  return (value - min) * (value - max) <= 0;
};

module.exports = isBetween;
