// const { defineConfig } = require("cypress");
// const webpackPreprocessor = require("@cypress/webpack-preprocessor");
// const webpackOptions = require("./cypress/webpack.config.js");

// module.exports = defineConfig({
//   component: {
//     devServer: {
//       framework: "react",
//       bundler: "webpack",
//     },
//     setupNodeEvents(on, config) {
//       const options = {
//         webpackOptions,
//       };
//       on("file:preprocessor", webpackPreprocessor(options));
//       return config;
//     },
//   },
// });
const { defineConfig } = require("cypress");
const webpackConfig = require("./webpack.config");
const webpackPreprocessor = require("@cypress/webpack-preprocessor");

module.exports = defineConfig({
  projectId: 'bw2gci',
  // ...other Cypress configurations if needed
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
      webpackConfig, // Use the webpack config you just created
    },
    specPattern: "cypress/component/**/*.cy.{js,jsx,ts,tsx}",
  },

  e2e: {
    setupNodeEvents(on, config) {
      const options = {
        webpackOptions: webpackConfig,
        watchOptions: {},
      };
      on("file:preprocessor", webpackPreprocessor(options));
      return config;
    },
  },
});


