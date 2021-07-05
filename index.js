#!/usr/bin/env node
const program = require("commander");
const clipboardy = require("clipboardy");
const createPassword = require("./src/utils/createPassword");
const savePassword = require("./src/utils/savePassword");
const isBetween = require("./src/utils/isBetween");

program
  .version("1.0.0")
  .description("Simple password generator")
  .option("-l, --length <number>", "length of password", "10")
  .option("-s, --save", "save password to passwords.txt", false)
  .option("-nn, --no-numbers", "remove numbers")
  .option("-ns, --no-symbols", "remove symbols")
  .option("-cp --copy", "copy to clipboard", false)
  .parse();

const { length, save, numbers, symbols, copy } = program.opts();

// Check length
if (!isBetween(length)) {
  console.log({
    message: "Password length must be between 1 and 32 characters",
  });
  return;
}

// Create password
const password = createPassword(length, numbers, symbols);
console.log({ message: "Password created", password });

// Save password
if (save) {
  savePassword(password);
  console.log({ message: "Password saved to file", password });
}

// Copy to clipboard
if (copy) {
  clipboardy.writeSync(password);
  console.log({ message: "Password copied to clipboard", password });
}
