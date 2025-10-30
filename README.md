# commit-ai

A simple CLI tool that generates git commit messages using Claude AI. Works with any programming language - Python, Java, JavaScript, Go, and more!

## Demo

![commit-ai demo](demo.gif)

> **Note**: Demo coming soon! See [DEMO_RECORDING.md](DEMO_RECORDING.md) for instructions on creating the demo.

## Features

- ✨ AI-powered commit messages using Claude 3.5 Haiku
- ⚡ Fast generation (typically ~1-2 seconds)
- 💰 Cost-effective (~$0.001-0.002 per commit)
- 🌍 Works with any programming language
- 📝 Follows git best practices (imperative mood, clear formatting)
- 🎯 Smart analysis of your changes

## Installation

### Option 1: Global Installation (Recommended)

Install once, use anywhere in any project:

```bash
npm install -g commit-ai
```

Then set your API key as an environment variable:
```bash
export ANTHROPIC_API_KEY=sk-ant-xxxxx
```

Or create a `.env` file in your project root.

### Option 2: Use Without Installing (npx)

Run directly without installation:

```bash
ANTHROPIC_API_KEY=sk-ant-xxxxx npx commit-ai
```

### Option 3: Local Development

For contributing or local development:

```bash
# Clone the repository
git clone https://github.com/yourusername/commit-ai.git
cd commit-ai

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env and add your API key

# Run locally
npm run commit
```

## Getting Your API Key

1. Sign up at [Anthropic Console](https://console.anthropic.com/)
2. Generate an API key
3. Set it as an environment variable or in a `.env` file:
   ```
   ANTHROPIC_API_KEY=sk-ant-xxxxx
   ```

## Usage

### Basic Usage

```bash
# 1. Make your code changes (in ANY language)
# Edit Python files, Java files, Go files, etc.

# 2. Stage your changes
git add .

# 3. Generate and commit
commit-ai
```

### Examples

**Python Project:**
```bash
cd my-python-project
git add app.py
commit-ai
```

**Spring Boot Project:**
```bash
cd my-spring-boot-app
git add src/
commit-ai
```

**JavaScript/Node.js Project:**
```bash
cd my-node-app
git add index.js
commit-ai
```

**Go, Rust, Ruby, PHP, C++:**
Works with any language! The tool analyzes git diffs, not the code itself.

### What It Does

1. Reads your staged git changes (`git diff --staged`)
2. Sends the diff to Claude 3.5 Haiku API
3. Generates a clear, professional commit message
4. Shows you the message with generation time (⚡ Generated in X.XXs)
5. Asks for confirmation before committing

### Example Output

```bash
$ commit-ai

Generating commit message with Claude Haiku...

⚡ Generated in 1.67s

Generated commit message:
──────────────────────────────────────────────────
Add user authentication with JWT tokens

Implement JWT-based authentication system with login
and token refresh endpoints. Includes middleware for
protected routes.
──────────────────────────────────────────────────

Do you want to commit with this message? (y/n): y

✓ Changes committed successfully!
```

## How it Works

1. Reads your staged git changes (`git diff --staged`)
2. Sends the diff to Claude Haiku API
3. Generates a clear, concise commit message following best practices
4. Shows you the message and asks for confirmation
5. Commits with the message if you approve

## Configuration

### Environment Variables

- `ANTHROPIC_API_KEY` (required): Your Anthropic API key

### .env File

Create a `.env` file in your project root:

```env
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

## Cost Information

Using Claude 3.5 Haiku:
- **Cost per commit**: ~$0.001-0.002
- **Speed**: ~1-2 seconds
- **Quality**: Excellent for commit messages

Compared to Claude Sonnet 4:
- 99% cheaper
- 2-3x faster
- Same quality for this use case

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
- Performance timing validation

### Test Structure

Tests are organized in [index.test.js](index.test.js):
- **Environment validation**: Checks for API key presence
- **getStagedDiff functionality**: Tests git diff operations
- **generateCommitMessage functionality**: Tests AI message generation
- **Performance timing**: Tests timing measurement and formatting
- **commitWithMessage functionality**: Tests git commit execution
- **Commit message format validation**: Validates message conventions
- **Edge cases**: Tests special scenarios and error conditions
- **Integration scenarios**: Tests complete workflows

## Requirements

- Node.js (v14 or higher)
- Git
- Anthropic API key

## Publishing to npm

To publish this package to npm:

```bash
# 1. Update version in package.json
npm version patch  # or minor, or major

# 2. Login to npm
npm login

# 3. Publish
npm publish
```

## Troubleshooting

### "ANTHROPIC_API_KEY is not set"
Make sure you've set the API key:
```bash
export ANTHROPIC_API_KEY=sk-ant-xxxxx
```
Or create a `.env` file with the key.

### "No staged changes found"
You need to stage your changes first:
```bash
git add <files>
```

### "Not a git repository"
Make sure you're in a git repository:
```bash
git init
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Run tests (`npm test`)
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## License

MIT

## Acknowledgments

- Powered by [Anthropic's Claude AI](https://www.anthropic.com/)
- Uses Claude 3.5 Haiku for fast, cost-effective generation
