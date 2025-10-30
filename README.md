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

## Requirements

- Node.js (v14 or higher)
- Git
- Anthropic API key

## License

ISC
