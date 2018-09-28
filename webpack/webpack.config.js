require("dotenv").config({ silent: true });

const HTMLWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const CSS_LOADER_OPTIONS = "sourceMap&localIdentName=[name]--[hash:base64:5]";

module.exports = {
  entry: {
    app: [path.resolve("src/index.tsx")],
  },

  output: {
    path: path.resolve("build"),
    filename: "[name].[hash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new HTMLWebpackPlugin({
      template: path.resolve("src/index.html"),
    }),
  ],

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { test: /\.css$/, loader: ["style-loader", `css-loader?${CSS_LOADER_OPTIONS}`] },
      {
        test: /\.s(a|c)ss$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }
    ],
  },
};
