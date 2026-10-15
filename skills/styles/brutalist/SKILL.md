---
name: sprucecss-style-brutalist
description: Design and build interfaces in the "Brutalist" style with Spruce CSS. Neo-brutalism. Use when the user asks for a brutalist look, or when a project uses data-spruce-style="brutalist".
---

# Brutalist style for Spruce CSS

Neo-brutalism: raw, loud and confident. Thick black outlines, hard offset shadows and saturated yellow/pink.

**Good for:** Landing pages, creative portfolios, indie products, event sites, campaigns.

## Enable it

```html
<html data-spruce-style="brutalist">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'brutalist'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** Archivo Black in uppercase for headings and legends, Archivo body text, extra-bold (800) uppercase buttons. Both fonts ship in the package's `font/` folder with tuned vertical metrics (the `@font-face` URLs use the `font-path` style setting, default `../font/`).
- **Color:** Black ink on a warm cream background (#fffbea-ish). Primary is hot pink, buttons are signal yellow and pink. Dark mode flips to white outlines on near-black.
- **Shape and depth:** Zero radius everywhere, 2px borders, hard offset shadows (2–8px, no blur) in the heading color.

## Components

- Buttons carry a 4px offset shadow, lift on hover (translate -2px) and press down on click (shadow disappears).
- Inputs, details, code blocks and tables get the same hard shadow and a solid black frame.
- Outline, soft and ghost buttons switch to black text and outlines.
- `mark`, `code` and `kbd` are bold and colorful.

## Do

- Embrace asymmetry and big type.
- Stack bold colored blocks; use `.btn--pill` sparingly (it breaks the language).
- Keep the shadows consistent in direction (bottom-right).

## Don't

- Use soft shadows, blur or gradients.
- Mix in rounded corners.
- Use low-contrast pastel text.

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'brutalist'`.
