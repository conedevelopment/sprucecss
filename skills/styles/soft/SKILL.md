---
name: sprucecss-style-soft
description: Design and build interfaces in the "Soft" style with Spruce CSS. Soft UI. Use when the user asks for a soft look, or when a project uses data-spruce-style="soft".
---

# Soft style for Spruce CSS

Soft UI: friendly, airy and calm, with pastel surfaces and large diffused shadows.

**Good for:** Consumer apps, onboarding flows, wellness and education products, mobile-first web apps.

## Enable it

```html
<html data-spruce-style="soft">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'soft'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** Rounded humanist sans (Nunito / Nunito Sans) with extra-bold (800) headings.
- **Color:** Periwinkle primary (#6b5bf0-ish) on a lavender-white background, white cards, lilac borders. Dark mode uses deep indigo surfaces.
- **Shape and depth:** Large radii (0.75rem / 1rem / 1.5rem) and pill-shaped buttons with generous padding. Diffused, slightly colored shadows.

## Components

- Buttons are pills with a small diffused shadow; secondary buttons are pale lilac.
- Inputs have a subtle inner shadow and soft borders.
- `details` become floating white cards without borders.
- Dialogs float with an extra-large soft shadow.

## Do

- Group content into white cards on the tinted background.
- Use the soft (`.btn--soft-*`) button variants.
- Keep icons rounded (stroke icons with round caps).

## Don't

- Use pure black text or harsh borders.
- Use sharp corners.
- Crowd elements; soft needs room to breathe.

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'soft'`.
