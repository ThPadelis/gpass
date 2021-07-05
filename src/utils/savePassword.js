const { join } = require("path");
const { writeFileSync } = require("fs");
const os = require("os");

const savePassword = (password) => {
  if (!password) return;
  try {
    const path = join(__dirname, "../../password.txt");
    const data = password + os.EOL;
    const options = { encoding: "utf-8", flag: "a" };
    writeFileSync(path, data, options);
  } catch (error) {
    console.log("Error", error.toString());
    const path = join(__dirname, "../../error.log");
    let data = {
      createdAt: new Date().toISOString(),
      error: error
        .toString()
        .replace(/^(.*?)\:/, "")
        .trim(),
    };
    data = JSON.stringify(data) + os.EOL;
    const options = { encoding: "utf-8", flag: "a" };
    writeFileSync(path, data, options);
  }
};

module.exports = savePassword;
