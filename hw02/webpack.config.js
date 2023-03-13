const { resolve } = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/js/main.js",
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|gif|mp3)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "index.html"),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "src/sound/*",
          to: "sound/[name][ext]",
        },
      ],
    }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  devServer: {
    port: 5000,
  },
};
