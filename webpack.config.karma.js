const { resolve } = require("path");

module.exports = {
  mode: "development",
  resolve: {
    alias: {
      scripts: resolve(__dirname, "scripts"),
    },
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
