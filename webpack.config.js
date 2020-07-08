const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  externals: ["xmlhttprequest"],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "jsKraken",
    libraryTarget: "var",
    libraryExport: "default",
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      APP_ENV: "browser",
    }),
  ],
};
