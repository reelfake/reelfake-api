import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Configuration } from "webpack";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
  entry: "./src/server.ts",
  target: "node",
  mode:
    process.env.NODE_ENV === "production"
      ? "production"
      : "development",
  externals: nodeExternals(),
  module: {
    rules: [
      {
        test: /.ts$/,
        loader: "esbuild-loader",
        options: {
          loader: "ts",
          target: "esnext",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "source-map",
};

export default config;
