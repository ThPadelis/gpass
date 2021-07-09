const program = require("commander");
const clipboardy = require("clipboardy");
const createPassword = require("./utils/createPassword");
const savePassword = require("./utils/savePassword");
const isBetween = require("./utils/isBetween");
const log = require("./utils/logger");
const { version } = require("../package.json");
const getEntropy = require("./utils/getEntropy");
const info = require("./utils/info");

const gpass = () => {
  program
    .version(version)
    .description("Simple password generator")
    .option("-l, --length <number>", "length of password", "10")
    .option("-s, --save", "save password to passwords.txt", false)
    .option("-el --exclude-lower", "exclude lower letters", false)
    .option("-eu --exclude-upper", "exclude upper letters", false)
    .option("-en --exclude-numbers", "exclude number", false)
    .option("-es --exclude-symbols", "exclude symbols", false)
    .option("-cp --copy", "copy to clipboard", false)
    .option("-p --pin", "create PIN", false)
    .parse();

  const { length, save, excludeLower: el, excludeUpper: eu, excludeNumbers: en, excludeSymbols: es, copy, pin } = program.opts();

  info();

  // Check length
  if (!isBetween(length, pin)) {
    if (pin) log("error", "PIN length must be between 3 and 12 characters");
    else log("error", "Password length must be between 6 and 32 characters");
    return;
  }

  // Create password
  let password;
  if (pin) password = createPassword(false, false, true, false, length);
  else password = createPassword(!el, !eu, !en, !es, length);
  log("success", `${pin ? "PIN" : "Password"} generated`, password);

  // Save password
  if (save) savePassword(password);

  // Copy to clipboard
  if (copy) {
    clipboardy.writeSync(password);
    if (pin) log("info", "PIN successfully copied to clipboard!");
    else log("info", "Password successfully copied to clipboard");
  }

  log("info", `Entropy is ${getEntropy(password)}`);
};

module.exports = gpass;
