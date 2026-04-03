# Icon Guide

The Chutes icon system is split between Lucide for generic UI actions and local custom icons for product, provider, and modality branding.

## Utility Icons

- Package: `@lucide/svelte`
- Typical use: buttons, nav affordances, menus, search, arrows, settings, forms, alerts, sharing
- Typical sizes: `16px`, `20px`, `24px`
- Typical colors: white, `ink-300`, or moss for active emphasis

Use Lucide when the concept is universal and does not need Chutes-specific branding.

## Core Brand And Product Icons

- Local packaged source: `./assets/icon-source/`
- Brand: `Chutes.svelte`, `ChutesFlat.svelte`
- Navigation/product: `API.svelte`, `Graphs.svelte`, `Home.svelte`, `Model.svelte`, `MyChute.svelte`, `News.svelte`, `Roadmap.svelte`, `SDK.svelte`, `Document.svelte`
- Platform/system: `Server.svelte`, `CPU.svelte`, `Jobs.svelte`, `Deploy.svelte`, `LockOutline.svelte`, `Coins.svelte`, `Payments.svelte`, `Card.svelte`, `Logs.svelte`, `Leaderboard.svelte`
- Layout/helpers: `Filter.svelte`, `Filters.svelte`, `Grid.svelte`, `GridLayout.svelte`, `Playground.svelte`

Use these when the icon needs to feel native to the Chutes ecosystem rather than generic software UI.

## Model And Modality Icons

- `Chat.svelte`
- `Image.svelte`
- `Video.svelte`
- `Speech-to-Text.svelte`
- `Text-to-Speech.svelte`
- `Music.svelte`
- `TEI.svelte`
- `Embeddings.svelte`
- `Content-Mod.svelte`
- `Other.svelte`

These are the clearest choice for product cards, filters, model chips, and capability callouts.

## Social, Community, And Ecosystem Icons

- `Discord.svelte`
- `Github.svelte`
- `XSocial.svelte`
- `Squad.svelte`
- `TAO.svelte`
- `Nvidia.svelte`

## Provider Icons

Component icons:

- `./assets/icon-source/providers/OpenAI.svelte`
- `./assets/icon-source/providers/Deepseek.svelte`
- `./assets/icon-source/providers/Kimi.svelte`
- `./assets/icon-source/providers/Microsoft.svelte`
- `./assets/icon-source/providers/Mistral.svelte`
- `./assets/icon-source/providers/Qwen.svelte`
- `./assets/icon-source/providers/Templar.svelte`
- `./assets/icon-source/providers/ZAI.svelte`

Raster provider logo wall:

- `./assets/logos/providers-bw/*`

## Color And State Rules

- Default on dark surfaces: white or `ink-300`
- Hover/active state: moss
- Muted/inactive state: `ink-500` or `ink-400`
- Success/live badges: moss on dark or dark on moss
- Warning/alternate emphasis: papaya

## Sizing Rules

- Inline control icon: `16px`
- Button/nav icon: `16px` to `20px`
- Card/feature icon: `20px` to `32px`
- Hero or logo-wall icon: only when it is acting as a brand mark

## Mixing Rules

- Mix Lucide with custom product icons only when the custom icon is carrying brand meaning.
- Avoid combining thin stroke icons and thick filled icons in the same compact control row.
- Use one visual language per module when possible.
- Prefer custom icons for product taxonomy and Lucide for action verbs.

## Packaging Notes

- The custom icon source has been copied locally into `./assets/icon-source/` so the brand package does not depend on `chutes-web/`.
- The brand mark SVGs themselves live in `./assets/brand/`.
- Generic Lucide icons are not bundled here because they are an external dependency rather than a Chutes-owned asset.
