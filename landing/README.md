# ElarisLabs Landing

Self-contained one-pager for ElarisLabs. No build step, no dependencies, no framework.

## Files

- `index.html` — the entire site (HTML, CSS, JS, animations all inline).

## Run locally

Open `index.html` in any browser, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8080

# Node
npx serve .
```

Then visit `http://localhost:8080`.

## Save as PDF

Click the **Save as PDF** button at the bottom-right, or use the browser print dialog.
A print stylesheet renders a dark, branded one-pager. In the print dialog enable
**Background graphics** to keep the colors.

## Deploy

Any static host works (Vercel, Netlify, Cloudflare Pages, GitHub Pages, S3, etc.).
Just drop the folder.

## Notes

- All animations are inline Canvas2D / SVG. No Lottie player, no external CDN scripts.
- Fonts are loaded from Google Fonts (Inter + Instrument Serif).
- The page is fully responsive and respects `prefers-reduced-motion`.
