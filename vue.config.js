process.env.VUE_APP_VERSION = require("./package.json").version;

const devTool = process.env.VUE_APP_DEVTOOL;
const path = require("path");

const entrypoint = "src/main.ts";
const outputDir = "dist";

module.exports = {
  productionSourceMap: false,
  configureWebpack: {
    devtool: !devTool ? false : devTool,
    resolve: {
      alias: {
        "@common": path.resolve(__dirname, "common")
      }
    }
  },
  pages: {
    index: entrypoint
  },
  outputDir: outputDir
};
