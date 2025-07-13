# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a self-contained Space Invaders game implemented in a single HTML file (`space-invaders.html`). The project contains no build system, dependencies, or external frameworks.

## Running the Game

To test the game:
```bash
open space-invaders.html
```

The game runs directly in any modern web browser without requiring a local server.

## Architecture

The game is built as a single-file application with:

- **HTML5 Canvas rendering**: All graphics drawn using 2D canvas context
- **Vanilla JavaScript game loop**: Uses `requestAnimationFrame` for smooth animation
- **Event-driven input**: Keyboard event listeners for player controls
- **Object-oriented game entities**: Player, invaders, and bullets as JavaScript objects
- **Collision detection**: Rectangle-based collision system between all game objects

## Game Logic Structure

Key game systems in `space-invaders.html`:

- **Player object**: Position, movement, and rendering
- **Invaders array**: Grid of enemy objects with AI movement patterns
- **Bullets arrays**: Separate arrays for player and invader projectiles
- **Game loop functions**: `updatePlayer()`, `updateInvaders()`, `updateBullets()`, `checkCollisions()`
- **Rendering functions**: `drawPlayer()`, `drawInvaders()`, `drawBullets()`

The game state is managed through global variables and the main `gameLoop()` function coordinates all updates and rendering.

## Development Workflow

Always commit meaningful changes to maintain clean git history:
- Fix bugs with descriptive commit messages explaining the issue and solution
- Add features with clear descriptions of functionality added
- Include context about why changes were made, not just what changed
- Commit frequently as work progresses rather than in large batches

## Deployment

The game is deployed via GitHub Pages at: https://urbanben.github.io/space-invaders-game/

**Deployment Process:**
1. All changes to `index.html` automatically deploy when pushed to main branch
2. GitHub Pages serves the file directly with no build process required
3. Changes typically take 1-2 minutes to appear live after push
4. The game requires no server-side processing and runs entirely in the browser

**File Structure for GitHub Pages:**
- `index.html` - Main game file (auto-served by GitHub Pages)
- `README.md` - Repository documentation with live demo link
- `CLAUDE.md` - Development guidelines (this file)

## Custom Slash Commands

### `/ask-david`
**Purpose:** Generate an email draft for David based on current project context and outstanding questions.

**Usage:** Simply type `/ask-david` in Claude Code to generate a professional email draft.

**What it does:**
- Analyzes current codebase state and recent changes
- Reviews conversation history for context and open questions
- Identifies areas needing input, approval, or clarification
- Generates a structured email with subject line and body
- Includes project status, accomplishments, questions, and next steps

**Output Format:**
- Clear subject line
- Professional email body with context
- Specific questions or decision points
- Suggested next steps
- Ready to copy/paste and send

**Use Cases:**
- Project status updates requiring feedback
- Technical decisions needing approval or input
- Clarification on requirements or priorities
- Resource or timeline discussions
- Milestone updates and strategic direction questions

The command files are located in `.claude/commands/` and configured via `.claude/commands.json`.

## MCP Email Server Setup

### Gmail MCP Server
A Gmail SMTP server has been installed to enable email sending directly from Claude Code.

**Location:** `/Users/ben/Claude/mcp-email-server/`

**Features:**
- Send emails via Gmail SMTP with TLS encryption
- Support for attachments (file path, URL download, pre-staged)
- HTML and plain text email support
- Secure App Password authentication

**Setup Required:**
1. Generate Gmail App Password (requires 2-Step Verification)
2. Create `.env` file with credentials in `mcp-email-server/gmail-mcp-server/`
3. Configure Claude Desktop with provided `claude_desktop_config.json`
4. Restart Claude Desktop

**Usage Examples:**
- "Send an email to david@example.com with subject 'Project Update' and the content from our /ask-david command"
- "Email the Space Invaders game link to someone"
- "Send a status update email with attachment"

**Configuration Files:**
- `mcp-email-server/gmail-mcp-server/.env` - Your Gmail credentials (create this)
- `mcp-email-server/claude_desktop_config.json` - MCP server configuration
- `mcp-email-server/SETUP_GUIDE.md` - Complete setup instructions

**Security:**
- Uses Gmail App Passwords (not main password)
- Runs locally on your machine
- Credentials stored only in local `.env` file
- TLS encryption for all email transmission

After setup, you can combine `/ask-david` with email sending: generate the email draft, then send it directly through Claude Code.