const chalk = require("chalk");

/**
 *
 * @param {"general" | "info" | "error" | "warning" | "success"} level The level for the log
 * @param  {...any} texts
 */
const log = (level = "info", ...texts) => {
  const error = chalk.bold.red;
  const warning = chalk.keyword("orange");
  const info = chalk.bold.blue;
  const success = chalk.bold.green;
  const general = chalk.bold.white;

  const [title, ...rest] = texts;
  let lvl;

  if (level === "info") lvl = info;
  else if (level === "success") lvl = success;
  else if (level === "error") lvl = error;
  else if (level === "general") lvl = general;
  else lvl = warning;

  console.log(`${lvl(title)} ${rest.join(" | ")}`);
};

module.exports = log;
