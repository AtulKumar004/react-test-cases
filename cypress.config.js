const { defineConfig } = require("cypress");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");
const webpackOptions = require("./cypress/webpack.config.js");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions,
      };
      on("file:preprocessor", webpackPreprocessor(options));
      return config;
    },
  },
});
