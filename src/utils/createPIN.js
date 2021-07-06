const createPIN = (length = 4) => {
  let pin = "";
  for (let i = 0; i < length; i++) {
    pin += Math.floor(Math.random() * 9);
  }
  return pin;
};

module.exports = createPIN;
