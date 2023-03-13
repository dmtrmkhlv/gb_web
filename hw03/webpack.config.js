const { resolve } = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: resolve(__dirname, "src", "index.js"),
  output: {
    path: resolve(__dirname, "build"),
    filename: "main.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpeg|jpg|gif)$/i,
        use: [
          {
            loader: "img-optimize-loader",
            options: {
              compress: {
                mode: "high",
                webp: true,
                gifsicle: true,
                disableOnDevelopment: false,
              },
            },
          },
        ],
        // use: ["file-loader", "url-loader"],
      },
      {
        test: /\.(mp[3|4])$/i,
        use: ["file-loader"],
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
      filename: "main.css",
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src", "index.html"),
    }),
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: "image/*",
    //       to: "image/[name][ext]",
    //     },
    //   ],
    // }),
    new CleanWebpackPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  devServer: {
    port: 5000,
  },
};
