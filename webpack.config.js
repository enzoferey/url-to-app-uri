const path = require("path");

module.exports = {
  entry: "./lib/index.js",
  mode: "development",
  target: "node",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, "./lib")],
        loader: "babel-loader",
      },
    ],
  },
};