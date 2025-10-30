# commit-ai

A simple CLI tool that generates git commit messages using Claude AI.

## Setup

1. Clone or navigate to this directory:

   ```bash
   cd commit-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file with your Claude API key:

   ```bash
   cp .env.example .env
   ```

4. Edit `.env` and add your Anthropic API key:
   ```
   ANTHROPIC_API_KEY=sk-ant-xxxxx
   ```

## Usage

1. Make your code changes and stage them:

   ```bash
   git add .
   ```

2. Run the commit message generator:

   ```bash
   npm run commit
   ```

3. Review the generated commit message and choose whether to commit.

## How it works

1. Reads your staged git changes (`git diff --staged`)
2. Sends the diff to Claude Sonnet API
3. Generates a clear, concise commit message following best practices
4. Shows you the message and asks for confirmation
5. Commits with the message if you approve

## Testing

This project includes comprehensive unit and integration tests using Jest.

### Running Tests

Run all tests:

```bash
npm test
```

Run tests in watch mode (useful during development):

```bash
npm run test:watch
```

Run tests with coverage report:

```bash
npm run test:coverage
```

### Test Coverage

The test suite covers:

- Environment variable validation
- Git diff retrieval and error handling
- Claude API interaction and error handling
- Commit message generation and formatting
- User input handling
- Edge cases (special characters, multi-line messages, large diffs)
- Complete integration workflows

### Test Structure

Tests are organized in [index.test.js](index.test.js):

- **Environment validation**: Checks for API key presence
- **getStagedDiff functionality**: Tests git diff operations
- **generateCommitMessage functionality**: Tests AI message generation
- **commitWithMessage functionality**: Tests git commit execution
- **Commit message format validation**: Validates message conventions
- **Edge cases**: Tests special scenarios and error conditions
- **Integration scenarios**: Tests complete workflows

## Requirements

- Node.js (v14 or higher)
- Git
- Anthropic API key

## License

ISC
