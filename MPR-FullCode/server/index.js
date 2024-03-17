const app = require("./app");
const chalk = require("chalk");

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(chalk.green("✓ ") + chalk.blue(`Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`));
});
