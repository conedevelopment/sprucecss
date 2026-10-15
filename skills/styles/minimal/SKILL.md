---
name: sprucecss-style-minimal
description: Design and build interfaces in the "Minimal" style with Spruce CSS. Quiet, precise, monochrome. Use when the user asks for a minimal look, or when a project uses data-spruce-style="minimal".
---

# Minimal style for Spruce CSS

Quiet, precise, monochrome. Think documentation sites, developer tools and editorial products where content is the hero.

**Good for:** SaaS dashboards, docs, portfolios, developer tools, settings pages.

## Enable it

```html
<html data-spruce-style="minimal">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'minimal'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** System UI sans-serif for everything, semibold (600) headings with slight negative tracking (-0.02em). No decorative fonts.
- **Color:** Near-black (#141619) on white, grays for structure. The primary color *is* the ink color. In dark mode the palette inverts: near-white on a cool near-black.
- **Shape and depth:** Small radii (0.25rem / 0.375rem / 0.5rem), 1px hairline borders, almost no shadows.

## Components

- Primary buttons are solid black (white in dark mode); secondary buttons are light gray fills.
- Inputs have hairline borders and a subtle 12% ink focus ring.
- Links are ink-colored with a thin underline offset by 0.2em.
- Tables rely on stripes and spacing, not borders.

## Do

- Use whitespace generously; let alignment create structure.
- Use one accent at most (or none).
- Use `.btn--ghost-primary` and `.btn--soft-primary` for secondary actions.

## Don't

- Add gradients, colored shadows or large radii.
- Use more than two font weights on a page.
- Use color to decorate; use it only for state (danger, success).

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'minimal'`.
