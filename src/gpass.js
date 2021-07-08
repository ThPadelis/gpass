const program = require("commander");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const isBetween = require("./utils/isBetween");
const log = require("./utils/logger");
const createPIN = require("./utils/createPIN");
const { version } = require("../package.json");

const gpass = () => {
  program
    .version(version)
    .description("Simple password generator")
    .option("-l, --length <number>", "length of password", "10")
    .option("-s, --save", "save password to passwords.txt", false)
    .option("-nn, --no-numbers", "remove numbers")
    .option("-ns, --no-symbols", "remove symbols")
    .option("-cp --copy", "copy to clipboard", false)
    .option("-p --pin", false)
    .parse();

  const { length, save, numbers, symbols, copy, pin } = program.opts();

  // Check length
  if (!isBetween(length, pin)) {
    if (pin) log("error", "PIN length must be between 3 and 12 characters");
    else log("error", "Password length must be between 6 and 32 characters");
    return;
  }

  // Create password or PIN
  let generated;
  if (pin) generated = createPIN(length);
  else generated = createPassword(length, numbers, symbols);
  log("success", `${pin ? "PIN" : "Password"} generated`, generated);

  // Save password or PIN
  if (save) savePassword(generated);

  // Copy to clipboard
  if (copy) {
    clipboardy.writeSync(generated);
    if (pin) log("info", "PIN successfully copied to clipboard!");
    else log("info", "Password successfully copied to clipboard");
  }
};

module.exports = gpass;
