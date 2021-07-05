#!/usr/bin/env node
const program = require("commander");
const clipboardy = require("clipboardy");
const createPassword = require("./src/utils/createPassword");
const savePassword = require("./src/utils/savePassword");

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

// Create password
const password = createPassword(length, numbers, symbols);

// Save password
if (save) savePassword(password);

// Copy to clipboard
if (copy) clipboardy.writeSync(password);
