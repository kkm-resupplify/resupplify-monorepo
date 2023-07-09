const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        "@sharedComponents": path.resolve(
          __dirname,
          "../../packages/vue-ui/components"
        ),
        "@sharedAtoms": path.resolve(__dirname, "../../packages/vue-ui/atoms"),
      },
    },
  },
});
