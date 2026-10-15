---
name: sprucecss-style-glass
description: Design and build interfaces in the "Glass" style with Spruce CSS. Glassmorphism. Use when the user asks for a glass look, or when a project uses data-spruce-style="glass".
---

# Glass style for Spruce CSS

Glassmorphism: depth and light. Frosted, translucent surfaces float over a soft pastel mesh backdrop.

**Good for:** Hero sections, media and music apps, crypto/fintech dashboards, product launches, widgets.

## Enable it

```html
<html data-spruce-style="glass">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'glass'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** Inter (or system sans) with tight tracking (-0.025em) on semi-bold (650) headings.
- **Color:** A refined indigo-violet primary (`hsl(250deg 58% 54%)`) over a subtle, low-saturation mesh of periwinkle, aqua and blush. Surfaces are white at 55% opacity with white 70–80% borders. Dark mode uses a muted indigo mesh, white-tinted glass (4–8%) and a light lavender primary with dark text.
- **Shape and depth:** Rounded (0.75rem / 1rem / 1.5rem), 1px light borders, layered soft shadows with a 1px inner top highlight, `backdrop-filter: blur(16px) saturate(140%)` on surfaces. Dialog backdrops are blurred too.

## Components

- Buttons, inputs, details, dialogs, code blocks and tables are frosted glass panes.
- The scope element paints the gradient (`background-attachment: fixed`).
- Primary buttons are translucent indigo with a soft colored glow; outline, soft and ghost buttons stay flat.

## Do

- Put glass on top of something with color or texture; glass on flat white is invisible.
- Keep text contrast high: dark text on light glass, white text on dark glass.
- Limit the number of stacked glass layers (performance).

## Don't

- Use it for dense data tables or long reading.
- Animate the blur.
- Forget a solid fallback color for older browsers.

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'glass'`.
