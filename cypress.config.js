const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "pvv2d9",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
