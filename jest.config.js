module.exports = {
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'index.js',
    '!node_modules/**',
    '!coverage/**'
  ],
  testMatch: [
    '**/*.test.js'
  ],
  verbose: true
};
