export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.js$": "babel-jest"
      },
    transformIgnorePatterns: [
        "/node_modules/(?!assignment-lib)"
    ],
    moduleFileExtensions: ["js", "mjs"],
    testPathIgnorePatterns: ["/node_modules/", "/.internal/"],
    coveragePathIgnorePatterns: ["/node_modules/", "/.internal/"],
    testMatch: ["**/tests/**/*.test.js"],
    collectCoverage: true,
    collectCoverageFrom: [
      "node_modules/assignment-lib/src/**/*.js"
    ],
    coverageReporters: ["lcov", "text"],
  };
  