---
name: sprucecss-style-playful
description: Design and build interfaces in the "Playful" style with Spruce CSS. Bubbly, vivid and tactile. Use when the user asks for a playful look, or when a project uses data-spruce-style="playful".
---

# Playful style for Spruce CSS

Bubbly, vivid and tactile: candy colors, chunky outlines and buttons you want to press.

**Good for:** Kids and education, games, community apps, creative tools, marketing sites with personality.

## Enable it

```html
<html data-spruce-style="playful">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'playful'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** Rounded type (ui-rounded / Baloo 2 / Nunito) with extra-bold (800) headings and bold (700) buttons.
- **Color:** Purple primary, teal secondary, pink accents on a warm cream background. Dark mode uses deep plum surfaces with brighter candy colors.
- **Shape and depth:** Big radii (0.875rem / 1.125rem / 1.75rem), pill buttons, chunky 2px borders.

## Components

- Primary and secondary buttons have a solid 4px "lip" shadow, lift 1px on hover and press 4px down on click.
- Checkboxes, radios and range thumbs are pink; switches are teal.
- `details` become white cards.

## Do

- Use illustrations and emoji-like icons.
- Mix the purple, teal and pink accents across sections.
- Use `.btn--lg` for the main call to action.

## Don't

- Use thin, light font weights.
- Use it for serious financial or legal content.
- Overuse motion; the press effect is enough.

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'playful'`.
