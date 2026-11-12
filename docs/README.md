# ElarisLabs Docs (Mintlify)

Public product documentation for ElarisLabs — Creative Studio, Campaigns, URL to Video, Scheduler, Insights, Workspaces, and MCP.

## Preview locally

```bash
npm i -g mint
mint dev
```

Open http://localhost:3000

## Deploy

Connect this folder to a [Mintlify](https://mintlify.com) project (GitHub app) and push to your default branch.

## Hosting

- The Mintlify project `elarislabs-87` builds this folder from `main` and hosts it.
- Live docs: https://elarislabs-87.mintlify.app. Use this link wherever you point to the docs.
- The project has no custom domain. It used to have `elarislabs.ai/docs`, served through the `/docs` rewrites in `../next.config.js`. `www.elarislabs.ai` now runs on Framer, so those rewrites no longer reach the site, and the domain was removed from the Mintlify dashboard on 2026-11-12.
- Old `/docs/...` links redirect to the same page without the prefix. The redirects are in `docs.json`.

## Structure

- `docs.json` — navigation, theme, branding
- `getting-started/` — welcome, quickstart, concepts
- `studio/` — Creative Studio nodes and tools
- `campaigns/`, `url-to-video/`, `product-staging/`, `ad-templates/`
- `scheduler/`, `insights/`, `brands/`, `workspaces/`
- `connect/` — MCP, API keys, Slack
- `models/`, `pricing/` — reference
- `guides/`, `legal/`
- `visibility/` — Elaris Visibility (the "AI Visibility" tab); screenshots in `images/visibility/`
- `one-view/` — One View Dashboard, also called Elaris Analytics (the "One View Dashboard" tab)

## Keeping the Visibility pages in sync

The pages in `visibility/` were converted on 2026-11-12 from the Visibility app's own public docs at https://visibility.elarislabs.ai/docs. Every page there has a Markdown copy: `/docs.md` for the overview and `/docs/<page>.md` for the rest. The app's docs are the source. When they change, update the matching `.mdx` page here.
