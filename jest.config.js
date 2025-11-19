export default {
    testEnvironment: "node",
    transform: {
        "^.+\\.js$": "babel-jest"
      },
    moduleNameMapper: {
      "^assignment-lib/(.*)$": "<rootDir>/node_modules/assignment-lib/src/$1"
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
      "<rootDir>/node_modules/assignment-lib/src/**/*.js",
      "!<rootDir>/node_modules/assignment-lib/src/.internal/**"
    ],
    coverageReporters: ["lcov", "text"],
  };
  