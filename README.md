# Chutes Style Guide

This package distills the live visual language in `chutes-web/` into a reusable reference for future work.

Use this directory like a starter kit:

- Open `preview.html` in a browser for a visual board.
- Import `chutes-tokens.css` when you want the same fonts, color variables, and a few starter patterns.
- Pull structured values from `chutes-tokens.json` for design tooling, prompts, or code generation.
- Use `ASSETS.md` and `ICONS.md` when choosing logos, imagery, and icon systems.

## Source of Truth

This guide was derived from the current implementation in:

- `chutes-web/src/app.css`
- `chutes-web/tailwind.config.ts`
- `chutes-web/src/lib/components/ui/*`
- `chutes-web/src/lib/components/icons/*`
- `chutes-web/src/routes/(landing-pages)/*`
- `chutes-web/src/lib/components/views/global/*`

## Brand Read

- Dark-first, atmospheric, and cinematic.
- Product feeling is technical and performance-driven, but not cold.
- Surfaces stack in soft charcoal layers instead of hard black/white contrast.
- The accent language is intentionally narrow: moss green does most of the work.
- Big moments use a moss-to-rose-to-indigo gradient rather than many disconnected colors.

## Typography

- Display, headings, nav, CTA: `Tomato Grotesk`
- Body copy, paragraphs, supporting text: `Neue Haas Unica`
- Code, terminals, data labels, snippets: `JetBrains Mono Nerd Font`

Hierarchy is mostly created with scale, weight, spacing, and contrast, not by introducing extra typefaces.

## Color Semantics

- `ink-900` and `ink-800`: primary canvases and page sections
- `ink-700`: raised cards, feature panels, hero containers
- `ink-300` to `ink-100`: supporting text and high-contrast copy
- `moss`: active state, success, launch badges, selected nav, emphasized stats, primary accent
- `papaya`: warm alternate accent, warning-leaning secondary highlight
- `mountain`: cool informational/data accent
- `mango`: soft feature tint or premium-supporting accent
- `banana`: rare attention grabber, best reserved for small moments

## Layout and Surface Rules

- Use large radii generously: `rounded-xl`, `rounded-2xl`, `rounded-3xl`, and pills.
- Keep cards dark and lightly bordered.
- Use backdrop blur on nav bars, pricing cards, overlays, and search surfaces.
- Prefer layered neutral surfaces over bright fills.
- Use moss fills or moss borders only where the user should look or act.

## Component Language

- Buttons are usually pill-shaped, display-font, and compact.
- Default CTA is bright and simple. Secondary CTA is transparent or muted.
- Badges are usually tiny pills: solid moss for launches, `moss/10` for softer status.
- Forms use tall rounded controls with translucent dark fills.
- Navigation uses compact display-font labels with moss for the active or hovered item.
- Editorial and docs surfaces stay dark with VS Code Dark+-style code highlighting.

## Motion

- Motion is slow, ambient, and product-led.
- Background videos create atmosphere more than narrative.
- Marquee, subtle spin, blur, hue shifts, and long loops show up often.
- Avoid bouncy or playful motion except in tiny one-off details.

## Logos and Icons

- Primary brand mark: `ChutesFlat`
- Secondary mark: `chutesblock.webp`
- Favicon: `favicon.png`
- Generic utility icons: `@lucide/svelte`
- Product, modality, and provider icons: local Svelte components in `src/lib/components/icons`

## Recommended Reuse Rules

- Start a new Chutes-flavored project on an ink background, not white.
- Keep `Tomato Grotesk` on headlines and `Neue Haas Unica` in body copy.
- Use moss as the default active/action color before reaching for other accents.
- Reserve the gradient treatment for hero moments, feature headlines, and very small emphasis areas.
- Use grayscale provider logos on dark surfaces and colorful partner logos only in curated bands.

## Implementation Notes

- `font-power` currently resolves to `Tomato Grotesk`, even though `Power Grotesk` files ship in `static/cdn/fonts/power`.
- `Season Mix` appears as a token, but there is no matching loaded `@font-face`.
- `Commit Mono` appears in naming, but the actually loaded mono face is `JetBrains Mono Nerd Font`.
- `moss` exists in two forms in the repo: a bright brand green in `app.css` (`#8BFFC6`) and a softer legacy green in `tailwind.config.ts` (`#CDEEB5`). For new work, use bright moss as the primary accent and keep the soft version only as an optional secondary tint.
