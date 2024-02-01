const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "fjmn6j",
  e2e: {
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    setupNodeEvents(on, config) {},
  },
  env: {
    LOGIN: "admin_automation",
    PASSWORD: "admin_automation",
    baseUrl: "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    adminLogin: "admin_automation",
    adminPassword: "admin_automation",
  },
});
