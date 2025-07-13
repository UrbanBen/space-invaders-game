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