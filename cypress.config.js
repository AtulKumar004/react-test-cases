const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'bw2gci',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 720,
  },
});
