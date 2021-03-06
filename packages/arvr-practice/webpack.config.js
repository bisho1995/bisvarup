const path = require("path");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.js",
  },
  watch: true,
};
