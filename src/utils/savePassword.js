const { join } = require("path");
const { writeFileSync } = require("fs");
const os = require("os");
const log = require("./logger");

const savePassword = (password, showInfo = true) => {
  if (!password) return;
  try {
    const path = join(process.cwd(), "./password.txt");
    const data = password + os.EOL;
    const options = { encoding: "utf-8", flag: "a" };
    writeFileSync(path, data, options);
    if (showInfo) log("info", "Password successfully saved to file");
  } catch (error) {
    const err = error
      .toString()
      .replace(/^(.*?)\\:/, "")
      .trim();
    if (showInfo) log("error", "Failed to save file", err);
  }
};

module.exports = savePassword;
