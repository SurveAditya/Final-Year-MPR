const mongoose = require("mongoose");
const chalk = require("chalk");

const { MONGODB_URL } = process.env;

exports.connect = () =>
  mongoose
    .connect(MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(chalk.green("✓") + chalk.blue(" Database Connected!"));
    })
    .catch((err) => {
      console.log(chalk.red("✗") + chalk.blue(" Database Connection Error!"));
      process.exit(1);
    });
