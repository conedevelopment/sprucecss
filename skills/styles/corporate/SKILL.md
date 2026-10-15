---
name: sprucecss-style-corporate
description: Design and build interfaces in the "Corporate" style with Spruce CSS. Enterprise and dependable, inspired by design systems like IBM Carbon. Use when the user asks for a corporate look, or when a project uses data-spruce-style="corporate".
---

# Corporate style for Spruce CSS

Enterprise and dependable, inspired by design systems like IBM Carbon: dense, structured, unambiguous.

**Good for:** B2B products, admin panels, internal tools, banking, government and data-heavy apps.

## Enable it

```html
<html data-spruce-style="corporate">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'corporate'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** IBM Plex Sans (fallback Helvetica/Arial), semibold (600) headings, regular-weight buttons, IBM Plex Mono for code. Labels are smaller (0.875rem).
- **Color:** Confident blue (#0062e6-ish) primary, near-black text, neutral grays, light gray input fields. Gray table header backgrounds. A green switch for "on".
- **Shape and depth:** Sharp: 2px (0.125rem) radius, 4px for large surfaces. Inputs are filled gray with only a bottom border; focus draws a full blue frame.

## Components

- Buttons are rectangular with wider padding (0.875em 1.25em).
- Inputs: filled, bottom-lined, square; focus = 1px inset blue frame.
- Tables have a gray header row with semibold headings.

## Do

- Align everything to a strict grid; use `.table--sm` for dense data.
- Prefer text labels over icons alone.
- Use the danger variants for destructive actions only.

## Don't

- Use playful colors, gradients or big radii.
- Use uppercase body text.
- Hide important actions in ghost buttons.

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'corporate'`.
