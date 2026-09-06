import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Configuration } from "webpack";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config: Configuration = {
  entry: "./src/server.ts",
  target: "node",
  mode: "production",
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
    filename: "server.cjs",
    path: path.resolve(__dirname, "dist"),
    library: { type: "commonjs2" },
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: "#!/usr/bin/env node",
      raw: true,
      entryOnly: true,
    }),
  ],
};

export default config;
