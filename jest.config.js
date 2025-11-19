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
    collectCoverage: true,
    collectCoverageFrom: [
      "tests/*.js",
      "!**/.internal/**"
    ],
    coverageReporters: ["lcov", "text"],
  };
  