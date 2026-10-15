---
name: sprucecss-styles
description: Apply, customize or create Spruce CSS design styles (style presets) that restyle the same markup, like minimal, brutalist, soft, glass, corporate, playful, editorial or terminal. Use when the user wants a different look or theme for a Spruce CSS project, asks for a `data-spruce-style`, or wants to write a new preset in the `$styles` map.
---

# Spruce CSS design styles

A **style** is a named set of design tokens, colors and a few extra rules. It changes how the *same markup* looks: no class names change. Spruce v3 ships eight presets: `minimal`, `brutalist`, `soft`, `glass`, `corporate`, `playful`, `editorial`, `terminal`.

## Turn styles on

Styles work through CSS custom properties, so the custom property mode is required:

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': (
      'attribute': 'data-spruce-style', // the attribute name
      'default': null,                  // a preset applied to :root without an attribute
      'include': null,                  // null = every preset, or a list like ('minimal', 'glass')
    ),
  ),
  $generators: (
    'content': ('styles': true),
  ),
);
```

- **Compile-time choice:** set `'default': 'editorial'` (the generator can stay off) and the whole site uses that style.
- **Runtime choice:** turn the generator on and put `data-spruce-style="brutalist"` on `<html>` (store the user's choice in `localStorage`).
- **Scoped:** put the attribute on any element (a card, a preview, a section). Tokens cascade by proximity, and preset rules stop at the boundary of a nested scope that uses a different style.

## Anatomy of a preset

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: ('css-custom-properties': true),
  $generators: ('content': ('styles': true)),
  $styles: (
    'sunset': (
      'label': 'Sunset',
      'description': 'Warm gradients and rounded cards.',
      'tokens': (
        'radius-sm': 0.5rem,         // shorthand: expands to every small radius hook
        'radius-lg': 1.25rem,
        'border-width': 1px,         // shorthand: every border width hook
        'font-family-heading': #{Georgia, serif},
        'btn-padding': 0.8em 1.4em,  // a component hook: --spruce-btn-padding
        'shadow-md': 0 8px 24px hsl(20deg 80% 40% / 18%),
      ),
      'colors': (
        'base': ('primary': hsl(20deg 90% 55%), 'background': hsl(30deg 100% 98%)),
        'btn': ('primary-background': hsl(20deg 90% 55%), 'primary-background-hover': hsl(20deg 90% 48%)),
      ),
      'dark-colors': (
        'base': ('background': hsl(20deg 20% 8%)),
      ),
      'rules': (
        '.btn': ('text-transform': uppercase),
        '&': ('background-image': linear-gradient(hsl(30deg 100% 98%), hsl(20deg 100% 95%))),
      ),
      'dark-rules': (),
    ),
  ),
);
```

| Key | What it does |
|---|---|
| `tokens` | Sets CSS custom properties on the scope. Keys are custom property names without the prefix, or a shorthand. |
| `colors` | Same structure as `$colors`. Only keys that exist in `$colors` have an effect (you get a warning otherwise). |
| `dark-colors` | Merged over `colors` in dark mode. Without it, the style keeps its light palette in dark mode. |
| `rules` / `dark-rules` | `selector => declarations` for anything a token can't express. `&` is the scope element itself. |
| `label`, `description` | Metadata for docs and tooling. |

### Shorthands

| Shorthand | Expands to |
|---|---|
| `radius-sm` | `border-radius-sm`, `border-radius` (inline code), `pre-border-radius`, `btn-`, `form-control-`, `form-control-sm-`, `form-check-`, `details-border-radius` |
| `radius-md` | `border-radius-md` |
| `radius-lg` | `border-radius-lg`, `dialog-border-radius` |
| `border-width` | `border-width-base` and the `btn`, `form-control`, `form-check`, `form-switch`, `details`, `dialog`, `table`, `divider` border widths |

### Hooks

In custom property mode every component value is exposed as a hook: `--{prefix}-{component}-{key}`, for example `--spruce-btn-padding`, `--spruce-form-control-border-radius`, `--spruce-table-sm-padding`, `--spruce-dialog-backdrop-filter`. Components: `btn`, `btn-sm`, `btn-lg`, `form-control(-sm|-lg)`, `form-check(-sm|-lg)`, `form-switch(-sm|-lg)`, `form-range(-sm|-lg)`, `form-group`, `form-group-check`, `form-group-row`, `form-description`, `form-fieldset`, `table`, `table-sm`, `details`, `dialog`, `progress`, `divider`. Root tokens (`font-family-base`, `font-family-heading`, `font-weight-heading`, `line-height-base`, `border-radius-*`, `shadow-*`, …) are set directly.

Only keys with a non-`null` default are hooks. For `null` keys (like `text-transform` or `letter-spacing`), use `rules`.

## Make components style-aware

Write component SCSS with the shared tokens and they follow every style automatically:

```scss
.card {
  background-color: color('surface');
  border: config('border-width-base', $display) solid color('border');
  border-radius: radius('lg');
  box-shadow: shadow('sm');
}
```

## Checklist for a good style

- Keep contrast at WCAG AA (4.5:1 for text) in both light and dark palettes.
- Define `dark-colors` (or decide the style is always light or always dark).
- Set the field colors (`form.border`, `form.check-foreground`, `form.select-foreground`) when you change the form palette: Spruce regenerates the SVG icons from them.
- Don't rely on fonts you don't load; always end font stacks with a generic family.
- Respect motion: wrap transforms in hover/active states only, keep them small.
