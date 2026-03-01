# Kotlin Programming Language — React Router 7 Migration

A migration of the [kotlinlang.org v1.6.20](https://kotlinlang.org) homepage from a legacy React + Flask setup to **React Router 7 Framework Mode** with Server-Side Rendering (SSR). Done as a part of the assignment for the [JetBrains Internship Application](https://github.com/JetBrains/kotlin-web-site-jetsites-internship-2026/)

Raghav Mangalapalli - TU Eindhoven

## Requirements

- Node.js v20+
- npm

## Getting Started

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Start the development server:

```bash
npm run dev
```

## Migration Approach

### React Router 7 Framework Mode

The project was migrated from a Flask-served React SPA to React Router 7 in framework mode. This enables full Server-Side Rendering. the page renders on the server and is hydrated on the client.

The routing is defined in `app/routes.ts` using a single layout route wrapping the index page:

```ts
layout("components/layout/index.tsx", [index("routes/_index/route.tsx")]);
```

### SSR Compatibility

The original project made direct `window` and `localStorage` calls at render time, which breaks SSR. These were fixed by moving all browser API calls into `useEffect` hooks so they only run on the client after hydration. For example:

- `window.innerWidth` checks for responsive card visibility in `HeaderSection`
- `localStorage` reads for testimonial sort order in `UsageSection`

### Project Structure

```
app/
├── components/
│   └── layout/
│       ├── Header/          # Site header with responsive mobile menu
│       ├── Footer/          # Site footer
│       ├── primitives/      # Shared Section and Container layout components
│       └── sections/        # Page sections
│           ├── HeaderSection/
│           ├── LatestFromKotlin/
│           ├── WhyKotlin/
│           ├── Usage/
│           └── Start/
├── routes/
│   └── _index/              # Index route
├── styles/                  # Global styles, grid, reset, fonts
└── root.tsx                 # App shell with HTML document
```

### rescui Component Usage

The migration makes extensive use of JetBrains' `@rescui` design system:

- `@rescui/button` — all CTAs and action buttons
- `@rescui/card` — feature cards in the header section and usage testimonials
- `@rescui/tab-list` — programming language code example tabs in WhyKotlin
- `@rescui/typography` — all text styles via `useTextStyles` hook
- `@rescui/ui-contexts` — `ThemeProvider` for light/dark theme switching
- `@rescui/icons` — navigation icons (hamburger, close, search) and footer social icons

### Note on Peer Dependencies

Some `@rescui` packages declare peer dependencies on React 16–18. Since this project uses React 19, installation requires the `--legacy-peer-deps` flag. The packages function correctly at runtime despite the version mismatch.

### Potential Improvements

- Find a way to make the original ktl components work as a direct improvements instead of rebulding them from scratch.
- Integrate more @rescui components into the codebase.
