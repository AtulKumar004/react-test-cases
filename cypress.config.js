const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.config");
const dotenv = require("cypress-dotenv");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  projectId: "bw2gci",

  // Component testing configuration
  env: {
    REACT_BASEURL: "http://localhost:3000",
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig, 
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",

    // Add setupNodeEvents for component tests
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: webpackConfig,
        watchOptions: {},
      };
      on("file:preprocessor", webpackPreprocessor(options));
      // Apply dotenv configuration for component
      config = dotenv(config);
      return config;
    },
  },

  // E2E testing configuration
  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: webpackConfig,
        watchOptions: {},
      };
      on("file:preprocessor", webpackPreprocessor(options));
      // Apply dotenv configuration for E2E
      config = dotenv(config);
      return config;
    },
  },
});
