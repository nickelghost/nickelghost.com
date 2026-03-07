# nickelghost.com

My personal portfolio website, available at [nickelghost.com](https://nickelghost.com/).

Built with [Astro](https://astro.build), TypeScript, and deployed on [Firebase Hosting](https://firebase.google.com/products/hosting).

## Pages

- **About me** (`/`) — A short bio with a dynamically calculated age
- **Projects** (`/projects`) — Gallery of personal projects with descriptions, tech stacks, and links
- **Experience** (`/experience`) — Work experience timeline with roles, companies, and date ranges

JSON API endpoints (`/homepage.json`, `/projects.json`, `/workplaces.json`) serve the same data for external consumers (e.g. a companion iOS app).

## Tech stack

- [Astro](https://astro.build) (SSG) with TypeScript
- [pnpm](https://pnpm.io) for package management
- [normalize.css](https://necolas.github.io/normalize.css/) + custom CSS with dark mode support
- [sharp](https://sharp.pixelplumbing.com/) for image optimization
- Astro View Transitions for SPA-like navigation
- Firebase Hosting with a Content-Security-Policy header

## Content

Site content is managed through Astro content collections stored as JSON files:

- `src/content/projects/` — Project entries (name, description, image, technologies, links)
- `src/content/workplaces/` — Workplace entries (company, title, dates, technologies)
- `src/content-static/homepage.json` — Homepage copy

## Development

```sh
# Install dependencies
pnpm install

# Start the dev server
pnpm dev

# Build for production
pnpm build

# Preview the production build
pnpm preview
```

## Deployment

The site is deployed to Firebase Hosting. The build output directory is `dist/`.

Set the `SITE_URL` environment variable before building to configure the canonical site URL.
