const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: [
              "@babel/plugin-transform-runtime",
              "babel-plugin-styled-components",
              "react-refresh/babel",
            ],
          },
        },
      },
      {
        test: /\.css$/u,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
        ],
        type: "javascript/auto",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ReactRefreshWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      "~components": path.resolve(__dirname, "./src/components"),
      "~assets": path.resolve(__dirname, "./src/assets"),
    },
    extensions: [".js", ".jsx", ".json"],
  },
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3001,
    hot: true,
    open: true,
  },
};
