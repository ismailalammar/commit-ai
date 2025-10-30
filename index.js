#!/usr/bin/env node

require('dotenv').config();
const Anthropic = require('@anthropic-ai/sdk');
const { execSync } = require('child_process');
const readline = require('readline');

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

async function getStagedDiff() {
  try {
    const diff = execSync('git diff --staged', { encoding: 'utf-8' });

    if (!diff.trim()) {
      console.error('Error: No staged changes found. Use "git add" to stage your changes first.');
      process.exit(1);
    }

    return diff;
  } catch (error) {
    console.error('Error: Not a git repository or git is not installed.');
    process.exit(1);
  }
}

async function generateCommitMessage(diff) {
  console.log('Generating commit message with Claude Haiku...\n');

  const startTime = Date.now();

  try {
    const message = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are a helpful assistant that writes clear, concise git commit messages following best practices.

Based on the following git diff, generate a commit message that:
- Uses imperative mood (e.g., "Add feature" not "Added feature")
- Has a clear, concise summary line (50 chars or less if possible)
- If needed, includes a blank line followed by more detailed explanation
- Focuses on WHAT changed and WHY, not HOW

Git diff:
${diff}

Respond with ONLY the commit message, no additional commentary or formatting.`
        }
      ]
    });

    const duration = ((Date.now() - startTime) / 1000).toFixed(2);
    console.log(`⚡ Generated in ${duration}s\n`);

    return message.content[0].text.trim();
  } catch (error) {
    console.error('Error calling Claude API:', error.message);
    process.exit(1);
  }
}

function promptUser(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.toLowerCase().trim());
    });
  });
}

async function commitWithMessage(message) {
  try {
    execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, {
      encoding: 'utf-8',
      stdio: 'inherit'
    });
    console.log('\n✓ Changes committed successfully!');
  } catch (error) {
    console.error('\nError: Failed to commit changes.');
    process.exit(1);
  }
}

async function main() {
  // Check for API key
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error('Error: ANTHROPIC_API_KEY environment variable is not set.');
    console.error('Please create a .env file with your API key.');
    process.exit(1);
  }

  // Get staged changes
  const diff = await getStagedDiff();

  // Generate commit message
  const commitMessage = await generateCommitMessage(diff);

  // Display the generated message
  console.log('Generated commit message:');
  console.log('─'.repeat(50));
  console.log(commitMessage);
  console.log('─'.repeat(50));
  console.log();

  // Ask user if they want to commit
  const answer = await promptUser('Do you want to commit with this message? (y/n): ');

  if (answer === 'y' || answer === 'yes') {
    await commitWithMessage(commitMessage);
  } else {
    console.log('\nCommit cancelled. You can use the message above manually if needed.');
  }
}

// Run the CLI
main().catch(error => {
  console.error('Unexpected error:', error);
  process.exit(1);
});
