# commit-ai

🤖 AI-powered git commit messages in seconds. Works with any programming language.

[![npm version](https://badge.fury.io/js/commit-ai.svg)](https://www.npmjs.com/package/@ismailalammar/commit-ai)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/commit-ai.svg)](https://www.npmjs.com/package/@ismailalammar/commit-ai)

## Demo

![commit-ai demo](demo.gif)

## Why commit-ai?

Stop struggling with commit messages. Let AI write clear, professional commits based on your code changes.

✨ **Before:** "fixed stuff", "updates", or spending 5 minutes crafting the perfect message
⚡ **After:** Professional, descriptive commit message in ~2 seconds

**Works with ANY language:** Python, Java, JavaScript, Go, Rust, PHP, C++, and more!

---

## Quick Start

```bash
# 1. Install globally
npm install -g @ismailalammar/commit-ai

# 2. Get your API key from https://console.anthropic.com
export ANTHROPIC_API_KEY=sk-ant-xxxxx

# 3. Use it!
cd your-project
git add .
commit-ai
```

That's it! ✨

---

## Features

- ✨ **AI-powered** - Uses Claude 3.5 Haiku for smart, context-aware messages
- ⚡ **Lightning fast** - Generates in ~1-2 seconds
- 💰 **Super cheap** - ~$0.001-0.002 per commit (1,000 commits = ~$1-2)
- 🌍 **Any language** - Python, Java, Go, JavaScript, Rust, PHP, C++, etc.
- 📝 **Best practices** - Follows conventional commit format with imperative mood
- 🎯 **Smart analysis** - Understands your code changes
- 🔒 **Privacy-focused** - Runs locally, only sends git diffs
- 🆓 **Open source** - MIT licensed, free forever

---

## Installation

### Option 1: Global Installation (Recommended)

Install once, use anywhere in any project:

```bash
npm install -g @ismailalammar/commit-ai
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
git clone https://github.com/ismailalammar/commit-ai.git
cd commit-ai

# Install dependencies
npm install

# Create .env file
cp .env.example .env
# Edit .env and add your API key

# Run locally
npm run commit
```

---

## Getting Your API Key

1. Go to [Anthropic Console](https://console.anthropic.com/)
2. Sign up (get $5 free credits!)
3. Generate an API key
4. Set it as an environment variable or in a `.env` file:
   ```bash
   export ANTHROPIC_API_KEY=sk-ant-xxxxx
   ```

---

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

---

## 💰 Cost Information

**The tool is free.** You only pay for Claude API usage:

Using Claude 3.5 Haiku:

- **Cost per commit**: ~$0.001-0.002
- **1,000 commits**: ~$1-2
- **Speed**: ~1-2 seconds
- **Quality**: Excellent for commit messages

**Get $5 free credits** at [console.anthropic.com](https://console.anthropic.com)

**Compared to Claude Sonnet 4:**

- 99% cheaper
- 2-3x faster
- Same quality for this use case

---

## Why commit-ai?

### vs Manual Writing

- ✅ 10x faster
- ✅ Consistent quality
- ✅ Follows best practices
- ✅ Never forget important details

### vs GitHub Copilot

- ✅ 100x cheaper per commit
- ✅ Open source (customize it!)
- ✅ Works without IDE
- ✅ Focused specifically on commits

### vs ChatGPT Copy-Paste

- ✅ No context switching
- ✅ Stays in terminal
- ✅ One command vs. multiple steps
- ✅ Faster workflow

---

## Configuration

### Environment Variables

- `ANTHROPIC_API_KEY` (required): Your Anthropic API key

### .env File

Create a `.env` file in your project root:

```env
ANTHROPIC_API_KEY=sk-ant-xxxxx
```

Or set globally in your shell config (`~/.bashrc`, `~/.zshrc`):

```bash
export ANTHROPIC_API_KEY=sk-ant-xxxxx
```

---

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

Tests are organized in `index.test.js`:

- **Environment validation**: Checks for API key presence
- **getStagedDiff functionality**: Tests git diff operations
- **generateCommitMessage functionality**: Tests AI message generation
- **Performance timing**: Tests timing measurement and formatting
- **commitWithMessage functionality**: Tests git commit execution
- **Commit message format validation**: Validates message conventions
- **Edge cases**: Tests special scenarios and error conditions
- **Integration scenarios**: Tests complete workflows

---

## Roadmap

Current features:

- [x] AI-powered commit messages
- [x] Multi-language support
- [x] Fast generation (~2s)
- [x] Cost-effective (Haiku model)
- [x] Comprehensive test suite

Coming soon:

- [ ] PR description generation
- [ ] Custom commit templates
- [ ] Team conventions support
- [ ] Conventional commits format options
- [ ] Integration with Linear/Jira for ticket references
- [ ] Commit message history/learning
- [ ] Support for commit message editing before confirmation

Want a feature? [Open an issue](https://github.com/ismailalammar/commit-ai/issues)!

---

## FAQ

**Q: Is this really free?**
A: The tool is free and open source (MIT license). You pay Anthropic directly for API usage (~$0.001-0.002/commit). Your first $5 of credits are free.

**Q: Does it work with private repositories?**
A: Yes! Everything runs locally. Only git diffs are sent to the Claude API (not your entire codebase).

**Q: What if I don't like the generated message?**
A: Just press 'n' to decline and write your own, or run `commit-ai` again for a new suggestion.

**Q: Can my company/team use this?**
A: Yes! MIT licensed. However, check your company's policy on sending code to external APIs.

**Q: Does it support conventional commits?**
A: Yes! Messages follow best practices with imperative mood and clear descriptions. Custom formats coming soon.

**Q: What languages does it support?**
A: ALL of them! It analyzes git diffs, not the code itself. Works with Python, Java, Go, JavaScript, Rust, PHP, C++, Swift, Kotlin, and more.

**Q: How is this different from IDE extensions?**
A: Works in terminal, no IDE needed. Faster, cheaper, and open source. Use it with any editor (VS Code, Vim, IntelliJ, etc.).

**Q: Can I customize the commit message format?**
A: Not yet, but it's on the roadmap! For now, you can fork and modify the prompt in the code.

**Q: Is my code secure?**
A: Only git diffs (changes) are sent to Claude API, not your entire codebase. Anthropic doesn't store or train on your data.

---

## Requirements

- Node.js (v14 or higher)
- Git
- Anthropic API key ([get one here](https://console.anthropic.com))

---

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

### API errors

- Check your API key is valid
- Ensure you have credits in your Anthropic account
- Check your internet connection

---

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

---

## Contributing

Contributions are welcome! 🎉

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Run tests: `npm test`
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

**Ideas for contributions:**

- Add support for custom commit templates
- Implement conventional commit format options
- Add configuration file support (.commit-ai.json)
- Improve error messages
- Add more tests
- Improve documentation
- Add commit message editing before confirmation
- Support for different AI models

---

## ⭐ Show Your Support

If commit-ai saves you time, give it a star! It helps others discover the tool.

[⭐ Star on GitHub](https://github.com/ismailalammar/commit-ai)

---

## License

MIT

Free to use, modify, and distribute. See [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Powered by [Anthropic's Claude AI](https://www.anthropic.com/)
- Uses Claude 3.5 Haiku for fast, cost-effective generation
- Inspired by the developer community's need for better commit messages

---

## Links

- [npm package](https://www.npmjs.com/package/commit-ai)
- [GitHub repository](https://github.com/ismailalammar/commit-ai)
- [Issue tracker](https://github.com/ismailalammar/commit-ai/issues)
- [Anthropic API docs](https://docs.anthropic.com/)

---

**Made with ❤️ by developers, for developers**

_Stop writing "fixed stuff" commits. Start using commit-ai._ ✨
