# Distribution Guide

This guide explains how to distribute and share the commit-ai tool with others.

## Current Setup

The package is now configured for easy distribution! Key changes:
- Added `bin` field to package.json for CLI executable
- Added keywords for npm discoverability
- Updated license to MIT
- Added repository information
- Configured for global installation

## How Others Can Use It

### Method 1: NPM Package (Best for Public Distribution)

Once published to npm, users can install it globally:

```bash
# Install globally
npm install -g commit-ai

# Use anywhere
cd any-project
commit-ai
```

Or use without installing:
```bash
npx commit-ai
```

### Method 2: GitHub Direct Install

Users can install directly from GitHub without npm:

```bash
# Install from GitHub
npm install -g github:yourusername/commit-ai

# Or with specific version/branch
npm install -g github:yourusername/commit-ai#v1.0.0
npm install -g github:yourusername/commit-ai#main
```

### Method 3: Clone and Link (For Development)

```bash
# Clone the repo
git clone https://github.com/yourusername/commit-ai.git
cd commit-ai

# Install dependencies
npm install

# Create global link
npm link

# Now 'commit-ai' command is available globally
```

### Method 4: Private Distribution

For internal/private use:

**Option A: Private npm registry**
```bash
npm publish --registry=https://your-private-registry.com
```

**Option B: Git repository**
```bash
npm install -g git+https://your-git-server.com/commit-ai.git
```

**Option C: Tarball**
```bash
# Create tarball
npm pack

# Distribute commit-ai-1.0.0.tgz
# Users install with:
npm install -g commit-ai-1.0.0.tgz
```

## Publishing to NPM

### Prerequisites

1. **Create npm account**: https://www.npmjs.com/signup
2. **Verify email**
3. **Enable 2FA** (recommended)

### Publishing Steps

```bash
# 1. Login to npm
npm login

# 2. Verify you're logged in
npm whoami

# 3. Test the package locally
npm link
commit-ai --help

# 4. Check package contents
npm pack --dry-run

# 5. Publish (first time)
npm publish

# 6. For updates
npm version patch  # or minor, or major
npm publish
```

### Scoped Package (Recommended for Namespacing)

If the name "commit-ai" is taken, use a scoped package:

```bash
# Update package.json name to:
# "@yourusername/commit-ai"

# Publish as scoped package
npm publish --access public

# Users install with:
npm install -g @yourusername/commit-ai
```

## Version Management

### Semantic Versioning

- **Patch** (1.0.0 → 1.0.1): Bug fixes
- **Minor** (1.0.0 → 1.1.0): New features, backward compatible
- **Major** (1.0.0 → 2.0.0): Breaking changes

```bash
# Update version
npm version patch
npm version minor
npm version major

# This automatically:
# - Updates package.json
# - Creates git tag
# - Commits the change
```

## Distribution Checklist

Before publishing:

- [ ] Update package.json with correct repository URL
- [ ] Update package.json with your author name/email
- [ ] Test installation locally (`npm link`)
- [ ] Run all tests (`npm test`)
- [ ] Update README with any new features
- [ ] Update CHANGELOG.md
- [ ] Check for security vulnerabilities (`npm audit`)
- [ ] Verify .gitignore excludes sensitive files
- [ ] Add appropriate tags/releases on GitHub

## Usage Instructions for End Users

### For Node.js Users (Most Common)

Share these instructions:

```bash
# Install
npm install -g commit-ai

# Set API key
export ANTHROPIC_API_KEY=sk-ant-xxxxx

# Use it
cd your-project
git add .
commit-ai
```

### For Non-Node.js Developers

For developers who don't have Node.js:

1. **Install Node.js**: https://nodejs.org/
2. **Install commit-ai**:
   ```bash
   npm install -g commit-ai
   ```
3. **Set API key and use**

Emphasize: "You only need Node.js to run the tool - it works with ANY programming language!"

## Works With Any Language

Make it clear to users:

> **commit-ai works with Python, Java, Go, Rust, Ruby, PHP, C++, and ANY other language!**
>
> The tool analyzes git diffs, not your source code directly. As long as you have:
> - Git installed
> - Node.js installed (to run the tool)
> - Changes staged with `git add`
>
> It will work with any project in any language!

## Examples for Different Languages

Share these examples:

### Python Project
```bash
cd my-python-app
git add app.py requirements.txt
commit-ai
```

### Java/Spring Boot Project
```bash
cd my-spring-app
git add src/
commit-ai
```

### Go Project
```bash
cd my-go-app
git add main.go go.mod
commit-ai
```

### Any Project
```bash
cd any-project
git add .
commit-ai
```

## Troubleshooting for Users

Common issues and solutions:

### "command not found: commit-ai"
```bash
# Reinstall globally
npm install -g commit-ai

# Or check npm bin directory is in PATH
npm config get prefix
# Add {prefix}/bin to your PATH
```

### "ANTHROPIC_API_KEY not set"
```bash
# Set environment variable
export ANTHROPIC_API_KEY=sk-ant-xxxxx

# Or create .env file in project
echo "ANTHROPIC_API_KEY=sk-ant-xxxxx" > .env
```

### "No staged changes found"
```bash
# Stage your changes first
git add <files>
```

## Marketing Points

When sharing with others, highlight:

- ✅ **Works with ANY language** - Python, Java, Go, etc.
- ✅ **Fast** - ~1-2 seconds per commit
- ✅ **Cheap** - ~$0.001 per commit
- ✅ **Smart** - Follows git best practices
- ✅ **Easy** - One command: `commit-ai`
- ✅ **Safe** - Shows you the message before committing

## Support

Direct users to:
- **Documentation**: README.md
- **Issues**: GitHub Issues page
- **Testing Guide**: TESTING.md

## License

MIT - Free for commercial and personal use!

## Next Steps

1. **Update repository URL** in package.json
2. **Add your name** to package.json author field
3. **Test locally** with `npm link`
4. **Publish to npm** when ready
5. **Create GitHub release** with version tag
6. **Share with community!**

## Cost Transparency

Be transparent about costs with users:

> Uses Claude 3.5 Haiku - one of the most cost-effective AI models:
> - **~$0.001-0.002 per commit**
> - **Average: 100-500 commits = $0.10-1.00**
> - **Way cheaper than similar tools using GPT-4 or Sonnet-4**

This helps users understand they need their own API key and the costs involved.
