# Guessr Template Engine 🎮

This repository provides two ways to build your mini-games: a **Standalone Template** (easy to copy-paste) and a **Monorepo Architecture** (for scaling many games).

## 1. Standalone Template (Root)
This is the "ready-to-go" project. You can copy the contents of the root or `src/` to a new project and start coding immediately.

- **Fastest for a single game.**
- UI, Ads, and i18n are all local to `src/`.
- Just run `npm install` and `npm run dev`.

## 2. Monorepo Architecture (`/monorepo`)
A professional setup for studios building multiple games. It shares a core library (`@guessr/core`) across all games.

- **Best for long-term scaling.**
- Centralized design system and ad logic.
- Managed via NPM Workspaces.

---

## � Getting Started (Standalone)

```bash
npm install
npm run dev
```

## 🏗️ Core Features
- **Design System**: Vanilla CSS tokens with Glassmorphism and animations.
- **Ad Management**: Multi-provider support (A-ADS, AdSense) with built-in GDPR consent.
- **Internationalization**: Full `i18next` integration with automatic detection (EN/FR).
- **SEO & PWA**: Pre-configured meta tags and web manifest.
- **Testing**: Complete Vitest suite.

## 📦 Usage
Refer to the individual documentation within each folder for specific implementation details.
