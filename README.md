# Chutes Brand Package

This directory is now a self-contained brand package distilled from `chutes-web/`, with local copies of the brand-critical assets bundled into `./assets/` so the guide stays usable even if CDN paths or app structure change later.

## Start Here

- Run `npm run preview` inside `chutes-style/` to launch a local preview server at `http://127.0.0.1:4173/`.
- Read `BRAND_GUIDE.md` for the actual brand rules and design guidance.
- Open `index.html` directly if you want the raw standalone file, but the local server is the easier default.
- Import `chutes-tokens.css` when you want the same fonts, tokens, and starter primitives.
- Pull structured values from `chutes-tokens.json` for tooling, design prompts, or code generation.
- Use `ASSETS.md` and `ICONS.md` to find the packaged files quickly.

## Local Preview

From the project root:

```bash
cd chutes-style
npm run preview
```

Notes:

- The server is zero-dependency and uses Node's built-in `http` module.
- `/` serves `index.html` automatically.
- You can change the port with `PORT=4321 npm run preview`.
- `npm run dev` works too and points to the same preview server.

## Package Map

- `BRAND_GUIDE.md`: full brand guidance, usage rules, and implementation notes
- `index.html`: visual overview board
- `server.mjs`: tiny local preview server that serves `/` as the brand board
- `package.json`: preview commands for the packaged guide
- `chutes-tokens.css`: reusable token file with local font references
- `chutes-tokens.json`: machine-readable token and asset metadata
- `ASSETS.md`: packaged asset inventory
- `ICONS.md`: icon-system guide
- `assets/brand/`: packaged brand marks and social fallback art
- `assets/fonts/`: packaged font files
- `assets/logos/`: packaged partner and provider logos
- `assets/media/`: packaged motion assets
- `assets/images/`: packaged still imagery and card art
- `assets/social/`: packaged OG/social share images
- `assets/icon-source/`: packaged custom icon component source

## Source Of Truth

This package was reconstructed from the live implementation in:

- `chutes-web/src/app.css`
- `chutes-web/tailwind.config.ts`
- `chutes-web/src/lib/components/ui/*`
- `chutes-web/src/lib/components/icons/*`
- `chutes-web/src/routes/(landing-pages)/*`
- `chutes-web/src/lib/components/views/global/*`

## Important Notes

- `font-power` currently resolves to `Tomato Grotesk`, even though `Power Grotesk` files ship in the source app.
- `Season Mix` is named in tokens but is not actually shipped as a loaded web font.
- `Commit Mono` appears in naming, but the live mono face is `JetBrains Mono Nerd Font`.
- `moss` exists in both a bright and softer legacy form in the repo. This package treats bright moss as the main accent and keeps the softer green as a supporting tint.

## Snapshot

Generated from `index.html`.

![Chutes brand board snapshot](./preview-snapshot.png)
