const chalk = require("chalk");

/**
 *
 * @param {"info" | "error" | "warning" | "success"} level The level for the log
 * @param  {...any} texts
 */
const log = (level = "info", ...texts) => {
  const error = chalk.bold.red;
  const warning = chalk.keyword("orange");
  const info = chalk.bold.blue;
  const success = chalk.bold.green;

  let [title, ...rest] = texts;
  let lvl =
    level === "info"
      ? info
      : level === "success"
      ? success
      : level === "error"
      ? error
      : warning;

  console.log(lvl(title) + " " + rest.join(" | "));
};

module.exports = log;
