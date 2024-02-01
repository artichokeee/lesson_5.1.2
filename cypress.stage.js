const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fjmn6j",
  e2e: {
    baseUrl: "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    setupNodeEvents(on, config) {},
  },
  env: {
    LOGIN: "panel",
    PASSWORD: "123456",
  },
});
