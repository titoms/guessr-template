# Guessr Monorepo 🎮

A premium, optimized monorepo structure for building multiple "Guessr" style mini-games. This setup uses **NPM Workspaces** to share a core library across multiple games.

## 🚀 Getting Started

1.  **Install dependencies** at the root:
    ```bash
    npm install
    ```
2.  **Build the shared package**:
    ```bash
    npm run build -w @guessr/core
    ```
3.  **Run a specific app (e.g., template-game)**:
    ```bash
    npm run dev -w template-game
    ```

## 🏗️ Structure

```text
guessr-monorepo/
├── apps/
│   └── template-game/      # Example game using the shared library
├── packages/
│   └── guessr-core/        # Shared library (NPM package structure)
│       ├── src/
│       │   ├── components/ # UI, Ads, Layout
│       │   ├── context/    # Ad, Theme, Language contexts
│       │   ├── styles/     # Tokens and base CSS
│       │   └── index.ts    # Library entry point
│       └── vite.config.ts  # Library-mode build config
└── package.json            # Workspace root config
```

## 📦 Using the Shared Library

### In a new app:
1.  Create a new folder in `apps/`.
2.  Add `@guessr/core` to your `package.json` dependencies:
    ```json
    "dependencies": {
      "@guessr/core": "*"
    }
  ```
3.  Import components and logic:
    ```tsx
    import { Button, useLanguage, MainLayout } from '@guessr/core';
    ```
4.  Import styles in `index.css`:
    ```css
    @import "@guessr/core/styles/tokens.css";
    @import "@guessr/core/styles/base.css";
    ```

## 💎 Features

- **Built-in Ad Management**: Use `UniversalAdContainer` to switch between providers easily.
- **Multilingual Support**: Fully pre-configured `i18next` with automatic language detection.
- **Premium Design System**: Glassmorphism, CSS variables, and dark/light modes.
- **Library Mode Build**: `@guessr/core` is built into a professional bundle (UMD/ES) using Vite.

## 🧪 Testing & Linting
- Run `npm run test` from the root to test all packages.
- Run `npm run lint` from the root to lint the entire workspace.
