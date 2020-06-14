const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  context: __dirname,
  entry: {
    web: path.resolve("./source/web/client.tsx"),
    server: path.resolve("./source/server.ts"),
  },
  output: {
    path: path.resolve("./distribution/"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[local]",
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.node$/,
        use: "node-loader",
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};
