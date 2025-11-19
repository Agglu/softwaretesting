module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleFileExtensions: ["js", "mjs"],
  testPathIgnorePatterns: ["/.internal/", "/node_modules"],
  coveragePathIgnorePatterns: ["/.internal/", "/node_modules"],
  testMatch: ["**/tests/**/*.test.js"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.js"],
  coverageReporters: ["lcov", "text"]
};
