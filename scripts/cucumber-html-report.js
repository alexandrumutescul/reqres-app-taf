const reporter = require("cucumber-html-reporter");
const path = require("path");

try {
  reporter.generate({
    jsonDir: path.resolve(__dirname, "..", "cypress/reports/cucumber"), // ** Path of .json file **//
    reportPath: path.resolve(__dirname, "..", "cypress/reports"),
    output: path.resolve(__dirname, "..", "cypress/reports/cucumber.html"),
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    theme: "bootstrap",
    metadata: {},
  });
} catch (error) {
  console.log(error);
}
