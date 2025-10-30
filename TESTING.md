# Testing Guide for commit-ai

## Overview

This document provides detailed information about testing the commit-ai CLI tool.

## Test Suite

The project uses **Jest** as the testing framework with comprehensive unit and integration tests.

## Running Tests

### Basic Test Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (auto-rerun on file changes)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Categories

### 1. Environment Validation Tests
**Location**: `index.test.js` - "Environment validation" suite

Tests that verify:
- Application fails gracefully when `ANTHROPIC_API_KEY` is missing
- Application proceeds when API key is properly set

### 2. Git Integration Tests
**Location**: `index.test.js` - "getStagedDiff functionality" suite

Tests that verify:
- Git diff output is correctly retrieved
- Empty staged changes are handled
- Git errors (not a repository, git not installed) are caught

### 3. AI Message Generation Tests
**Location**: `index.test.js` - "generateCommitMessage functionality" suite

Tests that verify:
- Anthropic API is called with correct model and parameters
- API errors are handled gracefully
- Generated messages have whitespace trimmed
- Commit message follows best practices

### 4. Commit Execution Tests
**Location**: `index.test.js` - "commitWithMessage functionality" suite

Tests that verify:
- Git commit command executes with correct message
- Special characters (quotes) are properly escaped
- Commit failures are handled

### 5. Format Validation Tests
**Location**: `index.test.js` - "Commit message format validation" suite

Tests that verify:
- Messages use imperative mood (Add, Fix, Update, etc.)
- Messages avoid past tense (Added, Fixed, Updated)

### 6. Edge Case Tests
**Location**: `index.test.js` - "Edge cases" suite

Tests that handle:
- Very large diffs (10,000+ lines)
- Special characters ($, @, #, UTF-8)
- Multi-line commit messages
- Various message formats

### 7. User Input Tests
**Location**: `index.test.js` - "User input handling" suite

Tests that verify:
- Various forms of "yes" are accepted (y, yes, Y, YES)
- Non-yes inputs are properly rejected

### 8. Integration Tests
**Location**: `index.test.js` - "Integration scenarios" suite

Tests complete workflows:
- Happy path: diff → AI generation → commit
- Cancellation flow: diff → AI generation → user cancels

## Manual Testing

While unit tests cover the functionality with mocks, you should also test the actual tool manually:

### Manual Test 1: Basic Functionality

```bash
# Create a test change
echo "console.log('test');" > test-file.js

# Stage the change
git add test-file.js

# Run the tool
npm run commit

# Expected: AI-generated commit message appears
# Expected: Prompted for confirmation
# Expected: Commit succeeds when you type 'y'
```

### Manual Test 2: No Staged Changes

```bash
# Ensure nothing is staged
git reset

# Run the tool
npm run commit

# Expected: Error message about no staged changes
```

### Manual Test 3: Multiple Files

```bash
# Create multiple changes
echo "function foo() {}" > file1.js
echo "function bar() {}" > file2.js
git add file1.js file2.js

# Run the tool
npm run commit

# Expected: Commit message summarizes both changes
```

### Manual Test 4: Cancel Commit

```bash
# Stage a change
echo "test" > cancel-test.js
git add cancel-test.js

# Run the tool
npm run commit

# Type 'n' when prompted
# Expected: Commit is cancelled, message displayed for manual use
```

### Manual Test 5: Missing API Key

```bash
# Temporarily rename .env
mv .env .env.backup

# Run the tool
npm run commit

# Expected: Error about missing ANTHROPIC_API_KEY

# Restore .env
mv .env.backup .env
```

### Manual Test 6: Large Diff

```bash
# Create a file with many changes
for i in {1..100}; do echo "line $i" >> large-file.txt; done
git add large-file.txt

# Run the tool
npm run commit

# Expected: Handles large diff successfully
```

## Mocking Strategy

The test suite uses Jest mocks for:

1. **child_process.execSync**: Simulates git commands without actual git operations
2. **@anthropic-ai/sdk**: Simulates API calls without making real API requests
3. **dotenv**: Prevents loading actual .env file during tests

This approach ensures:
- Tests run fast (no network calls)
- Tests are deterministic (no external dependencies)
- No API costs during testing
- Tests work in CI/CD environments

## Adding New Tests

When adding new features, follow this pattern:

```javascript
describe('Your feature name', () => {
  beforeEach(() => {
    // Setup before each test
    jest.clearAllMocks();
  });

  test('should do something specific', () => {
    // Arrange: Set up test data and mocks
    const mockData = 'test';

    // Act: Execute the code being tested
    const result = someFunction(mockData);

    // Assert: Verify the results
    expect(result).toBe('expected');
  });
});
```

## Continuous Integration

To run tests in CI/CD:

```yaml
# Example GitHub Actions workflow
- name: Run tests
  run: npm test

- name: Generate coverage
  run: npm run test:coverage
```

## Test Maintenance

- Keep tests focused and isolated
- Update tests when changing functionality
- Maintain high test coverage (aim for >80%)
- Mock external dependencies consistently
- Use descriptive test names

## Troubleshooting

### Tests fail with "Cannot find module"
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

### Tests timeout
```bash
# Increase Jest timeout in jest.config.js
testTimeout: 10000
```

### Coverage not generated
```bash
# Ensure jest.config.js has coverage settings
collectCoverageFrom: ['index.js']
```

## Best Practices

1. **Run tests before committing**: `npm test`
2. **Check coverage regularly**: `npm run test:coverage`
3. **Test edge cases**: Don't just test happy paths
4. **Keep tests maintainable**: Use clear names and structure
5. **Mock external dependencies**: API calls, file system, etc.

## Resources

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)
