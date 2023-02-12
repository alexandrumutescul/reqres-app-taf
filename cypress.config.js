const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 30000,
  experimentalFetchPolyfill: false,
  experimentalInteractiveRunEvents: false,
  experimentalSourceRewriting: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  requestTimeout: 60000,
  numTestsKeptInMemory: 50,
  responseTimeout: 60000,
  pageLoadTimeout: 30000,
  includeShadowDom: true,
  reporterOptions: {
    charts: true,
    overwrite: false,
    json: true,
    html: false,
    filePrefix: "",
  },
  fixturesFolder: "cypress/fixtures",
  screenshotsFolder: "cypress/reports/screenshots",
  videosFolder: "cypress/reports/videos",
  video: false,
  downloadsFolder: "cypress/downloads",
  trashAssetsBeforeRuns: true,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  e2e: {
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "https://reqres.in/",
  },
});
