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
- Live docs: https://elarislabs-87.mintlify.app/docs. Use this link wherever you point to the docs.
- `www.elarislabs.ai` now runs on Framer. The `/docs` rewrites in `../next.config.js` only worked on the old Next.js deployment, so `www.elarislabs.ai/docs` returns 404.

## Structure

- `docs.json` — navigation, theme, branding
- `getting-started/` — welcome, quickstart, concepts
- `studio/` — Creative Studio nodes and tools
- `campaigns/`, `url-to-video/`, `product-staging/`, `ad-templates/`
- `scheduler/`, `insights/`, `brands/`, `workspaces/`
- `connect/` — MCP, API keys, Slack
- `models/`, `pricing/` — reference
- `guides/`, `legal/`
