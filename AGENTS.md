## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Portfolio Website Plan

### Tech Stack

- Astro.js (already set up)
- Tailwind CSS v4 (utility-first styling)
- Plus Jakarta Sans (self-hosted via Fontsource)
- Content Collections (project data + detail pages)
- Dark/Light mode (class-based toggle with localStorage persistence)

### Design Direction

Minimal / Clean — dark mode primary, professional feel, accessible to non-devs.
Clean whitespace, subtle card borders, good typography hierarchy, one accent color (teal or blue).

### Sections (Homepage)

1. **Hero** — Name, title ("Aspiring AI/ML & Data Engineer"), tagline, social links
2. **About** — Short bio
3. **Skills** — Tech icons/logos (Python, PyTorch, Docker, FastAPI, etc.)
4. **Projects** — Card grid, each linking to detail page
5. **Experience** — Timeline (Antam internship + Lab Assistant)
6. **Contact** — Email, LinkedIn, GitHub

### Project Detail Pages (/projects/[slug])

Each project is a Markdown file with frontmatter schema:

```
---
title: "Project Name"
description: "Short description"
techStack: ["Tech1", "Tech2"]
github: "https://github.com/..."
---

## Overview
What the project does...

## How I Built It
Step-by-step walkthrough...

## Results
Metrics, outcomes...
```

Route: `src/pages/projects/[slug].astro` with `getStaticPaths()` from content collection.

### File Structure

```
src/
├── content/projects/          # Markdown files (4 projects)
├── components/
│   ├── Header.astro           # Nav + theme toggle
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro           # Tech icons grid
│   ├── Projects.astro         # Card grid
│   ├── ProjectCard.astro
│   ├── Experience.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   └── ThemeToggle.astro      # Dark/light switch
├── layouts/
│   ├── Layout.astro           # Base HTML shell
│   └── ProjectLayout.astro    # For detail pages
├── pages/
│   ├── index.astro
│   └── projects/[slug].astro  # Dynamic route
├── data/site-config.ts        # Name, links, metadata
└── styles/global.css          # Tailwind + theme variables
```

### Projects (from PDF)

1. Multimodal AI Generated Content Detection (GEMASTIK XVIII)
2. AI-Powered Biology Assistant
3. Automated IDX ETL Pipeline
4. Personalized Baby Food (MPASI) RAG Recommender

### Deployment (Docker)

- `astro build` → `dist/` (static files)
- Serve with Nginx in a Docker container
- Cloudflare Tunnel for external access with custom domain

### Implementation Order

1. Setup — Install Tailwind, fonts, configure theme variables
2. Base layout — HTML shell with dark/light mode
3. Components — Build each section one by one
4. Content collection — Define schema, write project Markdown files
5. Project detail pages — Dynamic route with template
6. Polish — Responsive design, transitions, SEO meta tags
7. Docker — Dockerfile + nginx config
