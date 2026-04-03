# Chutes Brand Guide

This guide turns the live `chutes-web` implementation into a practical brand system. It is not a historical brand manual from a separate design team; it is a reconstruction of the visual and product language already shipping in the codebase.

Where the repo does not define explicit rules, the guidance below is inferred from repeated patterns across landing pages, docs, app chrome, shared UI, and brand assets.

## What Chutes Should Feel Like

- Dark-first, confident, technical, and high-performance.
- Built for developers, but not sterile or overly enterprise.
- Cinematic without becoming sci-fi cosplay.
- Open-source and infrastructure-oriented, but still premium.
- Selective with emphasis: most of the interface stays calm so a few moments can feel big.

## Brand Pillars

- Performance: visuals should imply speed, scale, and throughput.
- Clarity: even dramatic pages should remain easy to scan.
- Restraint: one strong accent is better than five competing ones.
- Infrastructure over ornament: motion, images, and gradients should reinforce capability, not distract from it.

## Logo System

Packaged logo assets:

- Canonical Chutes logo SVG: `./assets/brand/chutes-logo.svg`
- Primary flat mark, light: `./assets/brand/chutes-flat-light.svg`
- Primary flat mark, dark: `./assets/brand/chutes-flat-dark.svg`
- Secondary block mark: `./assets/brand/chutesblock.webp`
- Favicon: `./assets/brand/favicon.png`
- OG fallback art: `./assets/brand/chutes-opengraph.webp`
- Source component: `./assets/icon-source/ChutesFlat.svelte`

Recommended usage:

- If someone needs the raw vector logo file, start with `./assets/brand/chutes-logo.svg`.
- Use the flat mark as the default brand mark in navigation, headers, and product shells.
- Use the block mark for compact placements, thumbnails, tiles, avatars, or art-led compositions.
- Use the favicon only for browser, small app-icon, or metadata contexts.
- On dark surfaces, prefer the light flat mark.
- On light surfaces, use the dark flat mark or place the light mark inside a dark container.

Recommended clearspace, inferred from implementation:

- Keep at least half the logo height worth of breathing room around the mark.
- Do not crowd the mark with borders, badges, or neighboring logos.

Recommended minimum sizing:

- Flat mark: `32px` high or larger in UI
- Block mark: `40px` square or larger in UI
- Favicon/app icon: `16px` to `32px`

Avoid:

- Random recolors that break the monochrome mark language
- Gradient fills inside the logo itself
- Adding outlines, glows, or drop shadows to the primary mark
- Placing the white mark directly on busy light photography

## Typography

Primary type system:

- Display: `Tomato Grotesk`
- Body: `Neue Haas Unica`
- Mono: `JetBrains Mono Nerd Font`

Packaged font files live in:

- `./assets/fonts/Tomato/`
- `./assets/fonts/NeueHaas/`
- `./assets/fonts/mono/`
- `./assets/fonts/power/`

Usage rules:

- Headlines, navigation, buttons, filters, chips, and most short UI labels use `Tomato Grotesk`.
- Paragraphs, descriptions, supporting text, and docs body copy use `Neue Haas Unica`.
- Code, commands, technical snippets, and structured numeric data use the mono face.
- Tight tracking and large scale create the display voice; avoid over-styling with extra transforms or effects.

Important implementation nuance:

- The shipped app includes `Power Grotesk` files, but the live `font-power` alias currently resolves to `Tomato Grotesk`. Treat Power as an available alternate asset, not the current primary face.

## Color System

Core palette:

- `ink-900`: `#0C0C0C`
- `ink-800`: `#121212`
- `ink-700`: `#151515`
- `ink-600`: `#292929`
- `ink-500`: `#343434`
- `ink-400`: `#4A4A4A`
- `ink-300`: `#9C9C9C`
- `ink-200`: `#C4C4C4`
- `ink-100`: `#E0E0E0`
- `moss`: `#8BFFC6`
- `moss-soft`: `#CDEEB5`
- `papaya`: `#FFAB96`
- `mountain`: `#B4C1EE`
- `mango`: `#E3EC9F`
- `banana`: `#FFE551`

Semantic guidance:

- `ink-900` and `ink-800` are the primary canvases.
- `ink-700` is the common raised surface.
- `ink-300` is the default supporting-text zone.
- `moss` is the main action, active, success, and “look here” accent.
- `papaya` is a warm secondary accent, useful for softer warning or alternate emphasis.
- `mountain` is a cool informational or data-support accent.
- `mango` and `banana` should be used sparingly.

Important nuance:

- The repo contains both bright moss and a softer legacy moss. The current brand read is strongest when bright moss remains the default accent and the softer green appears only as a supporting tint.

## Gradient Usage

The recurring brand gradient is:

- Moss to rose to indigo

Use it for:

- Hero headlines
- Occasional featured words
- Rare breakthrough moments

Avoid using it for:

- Standard buttons
- Form controls
- Dense data UI
- Repeated list items or navigation

## Surfaces and Layout

Surface rules:

- Prefer layered dark surfaces over pure black voids.
- Cards and panels should feel slightly lifted through border, opacity, or blur rather than heavy shadows alone.
- Border treatment is usually subtle, low-contrast, and crisp.
- Rounded corners are generous and frequent.

Common shape language:

- Pills for chips and primary controls
- `rounded-xl` to `rounded-3xl` for cards, media frames, and hero shells
- Backdrop blur for nav bars, search surfaces, overlays, and premium panels

Layout rules:

- Give hero sections room to breathe.
- Keep text blocks narrow enough to stay readable on dark backgrounds.
- Use wide containers, but avoid overpacking them with too many simultaneous focal points.

## UI Semantics

Buttons:

- Default CTA: bright, simple, high-contrast
- Outline CTA: muted border, low visual priority, still crisp
- Moss CTA: contextual accent, best for product-specific or premium moments
- Papaya CTA: alternate accent, use selectively

Inputs:

- Tall, rounded, translucent, and dark
- Focus state should feel precise, not loud
- Use moss in focus treatment rather than blue when following the Chutes language

Badges and status:

- Solid moss pill for launches or primary status
- `moss/10` chip with moss text for softer status
- Papaya or neutral badge only when the state needs contrast from moss

Docs and code:

- Keep docs dark
- Syntax highlighting can stay close to VS Code Dark+
- Links inside rich text can lean moss

## Motion

Motion principles:

- Ambient, continuous, and supportive
- More “infrastructure humming” than “marketing animation”
- Slow loops outperform busy transitions

Preferred motion tools already used by the brand:

- Hero video loops
- Marquee strips
- Slow spin
- Hue shift
- Soft blur
- Light hover movement

Avoid:

- Bouncy toy-like motion
- Overly elastic interface transitions
- Multiple competing motion systems on one screen

## Imagery

Packaged imagery lives in:

- `./assets/media/hero/`
- `./assets/media/ambient/`
- `./assets/images/hyperscale/`
- `./assets/images/product/`
- `./assets/images/cards/`
- `./assets/social/`

Imagery guidance:

- Hero media should feel abstract, luminous, and infrastructure-driven.
- Photography should stay moody, sharp, and future-leaning.
- Product screenshots should be framed inside dark, rounded shells.
- Motion assets should almost always be paired with a dark gradient or overlay.

## Logos Beyond The Core Brand

Packaged logo sets:

- Partner logos: `./assets/logos/partners/`
- Grayscale provider wall: `./assets/logos/providers-bw/`
- Color provider/model logos: `./assets/logos/providers-color/`

Usage rules:

- Use grayscale provider logos when they appear as a set.
- Use colorful partner logos only in curated bands or co-branding moments.
- Do not mix too many styles of third-party logos in dense UI contexts.
- Let partner logos sit on softened dark surfaces rather than harsh white tiles.

## Iconography

Icon sources:

- Custom icon source: `./assets/icon-source/`
- Provider icon source: `./assets/icon-source/providers/`

System rules:

- Use custom Chutes icons for product taxonomy, capability types, and ecosystem-specific meaning.
- Use `@lucide/svelte` for generic actions, controls, and utility verbs.
- Avoid mixing too many fill styles and stroke styles in a single compact cluster.

## What To Keep Consistent In New Work

- Ink backgrounds before white backgrounds
- Tomato headlines before alternative display faces
- Neue Haas body copy before generic sans fallbacks
- Moss as the primary accent before secondary colors
- Gradient only for key moments
- Rounded, dark, slightly glassy surfaces
- Strong editorial restraint around what gets highlighted

## What To Avoid

- Default bright SaaS blues as the main accent
- Purple-heavy gradients replacing the existing moss-led system
- Flat white cards dominating the interface
- Tiny, cramped headlines
- Multiple accent colors competing inside the same module
- Overusing glow, blur, or motion until the interface becomes noisy

## Package Notes

This brand package includes local copies of the brand-critical assets so it remains usable even if CDN paths or app structure change later.

Primary implementation files to reuse:

- `./chutes-tokens.css`
- `./chutes-tokens.json`
- `./index.html`
- `./ASSETS.md`
- `./ICONS.md`

Primary asset root:

- `./assets/`
