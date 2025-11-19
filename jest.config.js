export const testEnvironment = "node";
export const transform = {
  "^.+\\.js$": "babel-jest"
};
export const transformIgnorePatterns = ["/node_modules/(?!assignment-lib)"];
export const moduleFileExtensions = ["js", "mjs"];
export const testPathIgnorePatterns = ["/.internal/"];
export const coveragePathIgnorePatterns = ["/.internal/"];
export const testMatch = ["**/tests/**/*.test.js"];
export const collectCoverage = true;
export const collectCoverageFrom = ["node_modules/assignment-lib/src/**/*.js"];
export const coverageReporters = ["lcov", "text"];
