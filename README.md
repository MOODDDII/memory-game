# Memory Game

A browser-based memory matching game built with React and Vite. Flip cards to
find all eight matching emoji pairs.

## Features

- 16 shuffled cards with eight emoji pairs
- Cards turn face down again when a pair does not match
- Reset the game at any time

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Run locally

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Deploy

The project is configured to deploy to GitHub Pages at
https://moodddii.github.io/memory-game/. The workflow in
`.github/workflows/deploy.yml` builds and publishes the site whenever changes
are pushed to `main`; it can also be started manually from the Actions tab.

In the repository's **Settings → Pages**, set the build and deployment source
to **GitHub Actions** if it is not already selected. Deployment status and the
published URL are available in the repository's **Actions** tab.
