const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fjmn6j",
  video: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    setupNodeEvents(on, config) {},
  },
  env: {
    LOGIN: "rusau1",
    PASSWORD: "123456",
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    adminLogin: "admin_automation",
    adminPassword: "admin_automation",
  },
});
