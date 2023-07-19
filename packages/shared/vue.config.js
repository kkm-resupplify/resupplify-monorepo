const path = require("path");

module.exports = {
  resolve: {
    alias: {
      "@sharedComponents": path.resolve(__dirname, "packages/vue-ui/components"),
      "@sharedAtoms": path.resolve(__dirname, "packages/vue-ui/atoms"),
    },
  },
};
