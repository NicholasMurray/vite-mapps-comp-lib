module.exports = {
  moduleNameMapper: {
    "\\.(css|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv : [
    "./setupTests.js"
  ],
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!**/**/index.js",
    "!**/**/*.stories.{js,jsx}",
    "!**/test-data/**"
  ],
  modulePathIgnorePatterns: [
    'node_modules',
    'jest-test-results.json'
  ],
  testEnvironment: 'jsdom'
};