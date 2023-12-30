const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "pvv2d9",
  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    setupNodeEvents(on, config) {},
  },
  env: {
    LOGIN: "natus1",
    PASSWORD: "123456",
  },
});
