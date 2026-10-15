---
name: sprucecss-style-terminal
description: Design and build interfaces in the "Terminal" style with Spruce CSS. Retro command line. Use when the user asks for a terminal look, or when a project uses data-spruce-style="terminal".
---

# Terminal style for Spruce CSS

Retro command line: phosphor green on near-black, monospace everything, a subtle glow.

**Good for:** Developer tools, CLI docs, hacker/security events, retro games, easter-egg modes.

## Enable it

```html
<html data-spruce-style="terminal">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'terminal'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** Monospace everywhere (ui-monospace / JetBrains Mono / Fira Code). Headings get `#`, `##`, `###` prompt markers, primary buttons a `> ` prefix; buttons are uppercase.
- **Color:** Phosphor green (#00ff00 family) text and borders on a near-black green-tinted background, yellow as the secondary accent. It is always dark (the same palette in light and dark mode).
- **Shape and depth:** Square corners, 1px green borders, glow shadows (`0 0 12px` green) on surfaces, a soft text glow.

## Components

- Primary buttons are solid green with black text and a `>` prefix.
- Inputs are black with green borders and green text; icons are regenerated in green.
- Tables, details, dialogs and code blocks glow slightly.

## Do

- Write microcopy like CLI output (lowercase, terse).
- Use `kbd` and `samp` generously.
- Use it as an alternate "mode" toggle.

## Don't

- Use images with lots of color.
- Use proportional fonts.
- Use it for long-form reading for a general audience.

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'terminal'`.
