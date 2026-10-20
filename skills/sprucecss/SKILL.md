---
name: sprucecss
description: Build and style web interfaces with Spruce CSS v3, the Sass-based CSS framework. Use when a project depends on the `sprucecss` npm package, imports `sprucecss/scss/spruce`, uses classes like `.btn`, `.form-control`, `.form-check` or `.table`, or when the user asks for Spruce CSS markup, Sass configuration, components, dark mode or design styles.
---

# Spruce CSS

Spruce CSS is a small, Sass-first framework. It styles native elements (typography, tables, forms, `details`, `dialog`, `progress`) with a few classes, and gives you **variables, mixins and functions** to write your own components. It has no grid system and only a handful of utility classes on purpose: write semantic HTML and component SCSS.

Docs: https://sprucecss.com/docs/ · Components: https://sprucecss.com/ui/

## Setup

```shell
npm install sprucecss
```

Configure Spruce on the **first** `@use` (Sass only allows configuration once), then generate the styles once:

```scss
// config/_config.scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true, // needed for style presets, runtime theming
  ),
  $generators: (
    'content': ('dark-mode': true, 'styles': true),
  ),
);

// main.scss
@use 'sprucecss/scss/spruce' as *;
@include generate-styles;
```

Every other file only does `@use 'sprucecss/scss/spruce' as *;` to access the helpers. Compile with `sass --load-path=node_modules` (or use `pkg:sprucecss` with the Node package importer).

## Rules for writing Spruce code

1. **Never hardcode design values** that exist as tokens. Use the getters:
    - `color('primary')`, `color('danger', 'alert')`, `color('primary-background', 'btn')`
    - `spacer('m')`, `spacer('xs:m')` (block:inline), `spacer-clamp('m', 'l')` (fluid)
    - `font-size('h3')` (fluid), `config('border-radius-lg', $display)`, `radius('md')`, `shadow('md')`, `z-index('modal')`
    - `color-alpha('primary', 0.15)`, `color-tint('primary', 85%)` (runtime color-mix, follow themes)
2. **Use the layout mixins** instead of grids: `layout-stack`, `layout-cluster`, `layout-grid`, `layout-sidebar`, `layout-switcher`, `layout-center`, `layout-flex`, `layout-reel`. The spacing comes from the parent: a flex column with a `gap` for sections, `layout-stack()` for every text group (never a bare `<div>` around a heading and a paragraph), no margin resets on the children (see the `sprucecss-spacing` skill).
3. **Responsive:** `@include breakpoint('md') {}`, `breakpoint-down('md')`, `breakpoint-between('md', 'xl')`, `container-query(30rem)`. Prefer intrinsic layouts first.
4. **Interaction:** `@include transition;` for transitions, `@include short-ring('button')` / `focus-ring(...)` for focus, `@include motion-safe {}` for animation.
5. **Dark mode:** `@include dark-mode { ... }` (works at the root or inside a rule). Colors come from CSS custom properties, so most components need nothing extra.
6. **Always use logical properties**, never physical ones, so every layout works in right-to-left languages: `inline-size`/`block-size` (not `width`/`height`), `margin-inline-start` (not `margin-left`), `padding-block` (not `padding-top`/`-bottom`), `inset-inline-start` (not `left`), `border-inline-start` (not `border-left`), `border-start-start-radius` (not `border-top-left-radius`), `text-align: start`, `100vi`/`100dvb` (not `100vw`/`100vh`). Only `background-position`, transforms, gradients and `clip-path` have no logical form: mirror them with `[dir='rtl']`.
7. **Alphabetize declarations**, use BEM (`.card`, `.card__title`, `.card--featured`), quote strings, trailing commas in maps.
8. Use `<a>` for navigation and `<button>` for actions; label every control; use `aria-*` for state.

## Markup reference

### Buttons
`.btn` + a variant: `.btn--primary`, `.btn--secondary`, `.btn--danger`, `.btn--outline-{primary|secondary|danger}`, `.btn--soft-{…}`, `.btn--ghost-{…}`, `.btn--link`.
Modifiers: `.btn--sm`, `.btn--lg`, `.btn--block`, `.btn--pill`, `.btn--icon` (icon only, add `aria-label`), `.btn--loading` (+ `aria-busy="true"`), `.btn--disabled` (links, with `aria-disabled="true"`), `.btn--{variant}-shadow`. Icons: `<svg class="btn__icon">`. Groups: `.btn-group`, `.btn-group--vertical`.
Custom variants: `.btn--brand { @include btn-variant('brand'); }` after adding `brand-background`, `brand-background-hover`, `brand-foreground` under `btn` in `$colors`. Also `btn-variant-outline`, `btn-variant-soft`, `btn-variant-ghost`.

### Forms
```html
<div class="form-group">
  <label class="form-label form-label--required" for="email">Email</label>
  <input class="form-control" id="email" type="email" aria-describedby="email-help" required>
  <span class="form-description" id="email-help">We never share it.</span>
</div>
<label class="form-check">
  <input class="form-check__control" type="checkbox">
  <span class="form-label form-check__label">Remember me</span>
</label>
<label class="form-switch">
  <input class="form-switch__control" type="checkbox" role="switch">
  <span class="form-label form-switch__label">Notifications</span>
</label>
```
- `.form-control` (+ `--sm`, `--lg`, `--valid`, `--invalid`) for inputs, `select`, `textarea`; `.form-range` (+ `--sm`, `--lg`); `.form-file`.
- Feedback: `.field-feedback--valid|--invalid`. Grouping: `.form-group--horizontal-check`, `.form-group--vertical-check`, `.form-group--row` (inside `.form-group-container`), `.form-group--stacked` with `.form-group-label` addons, `.form-row--mixed`.

### Content
- Typography: plain `h1–h6`, `p`, `.lead`, `blockquote`, `figure.quote`, lists, `code`, `kbd`, `pre > code`, `mark`, `.h1–.h6` size utilities.
- Tables: `.table` + `--striped`, `--hover`, `--bordered`, `--clear-border`, `--sm`, `--rounded`, `--in-line`, `--middle`, `--sticky-header`; wrap in `.table-responsive`.
- Native elements: `details > summary`, `dialog` (open with `showModal()`), `progress`, `meter`, `hr`, `img`, `video`, `figure > figcaption`.
- Utilities: `.sr-only`, `.sr-only-focusable`, `.hidden`; opt-in text (`.text-center`, `.text-muted`, `.text-truncate`, …) and layout (`.l-stack`, `.l-cluster`, `.l-grid`, `.l-sidebar`, `.l-switcher`, `.l-reel`, `.l-center`) utilities, configured through custom properties like `--stack-gap`.

## Components, blocks and pages

For full-width page areas (blocks), their `.name-block > .container > .name-block__inner` structure and page composition, see the `sprucecss-blocks` skill.

## Design styles

The same markup can look completely different with a **style preset**: put `data-spruce-style="minimal|brutalist|soft|glass|corporate|playful|editorial|terminal"` on `<html>` or any element (requires `'css-custom-properties': true` and the `styles` generator). See the `sprucecss-styles` skill and the per-style skills in `skills/styles/`.

## Component pattern

```scss
@use 'sprucecss/scss/spruce' as *;

.pricing-card {
  background-color: color('surface');
  border: config('border-width-base', $display) solid color('border');
  border-radius: radius('lg');
  box-shadow: shadow('sm');
  padding: spacer-clamp('m', 'l');
  @include layout-stack('s');

  &__price {
    color: color('heading');
    font-size: font-size('h2');
  }

  &--featured {
    border-color: color('primary');
  }
}
```

Use `radius()`, `shadow()`, `config('border-width-base', $display)` and the base colors (`surface`, `border`, `heading`, `text`, `muted`) so the component follows every style preset and the dark mode.
