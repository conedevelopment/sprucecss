---
name: sprucecss-style-editorial
description: Design and build interfaces in the "Editorial" style with Spruce CSS. Magazine and print. Use when the user asks for a editorial look, or when a project uses data-spruce-style="editorial".
---

# Editorial style for Spruce CSS

Magazine and print: literary, classic and elegant. Serif headings over sans-serif text, paper tones and a single ink-red accent.

**Good for:** Blogs, publications, long-form articles, newsletters, books, cultural institutions, law firms.

## Enable it

```html
<html data-spruce-style="editorial">
```

```scss
@use 'sprucecss/scss/spruce' with (
  $settings: (
    'css-custom-properties': true,
    'styles': ('default': 'editorial'), // or turn on the styles generator and use the attribute
  ),
);
```

The markup stays standard Spruce CSS (`.btn`, `.form-control`, `.table`, `details`, `dialog` …). Don't add style-specific classes: the preset restyles everything through tokens.

## Visual language

- **Typography:** Fraunces display serif headings (bundled with its italic in the package's `font/` folder, loaded through the `font-path` style setting) over a system sans-serif body. Italic lead paragraphs and blockquotes, small-caps labels, table headings and captions. Loose line height (1.75).
- **Color:** Near-black ink on warm paper (#faf8f3-ish), hairline warm-gray rules, ink-red (#ad1c1c-ish) links and accents. Dark mode is warm charcoal with cream text.
- **Shape and depth:** Square corners, hairline borders, no shadows. Horizontal rules are 3px double lines.

## Components

- Buttons are small uppercase labels with wide tracking (0.12em); primary is solid black.
- Blockquotes use the display serif, larger and italic.
- Labels, legends, table headings, captions and figcaptions use small caps.

## Do

- Set a comfortable measure (60–75 characters) for text.
- Use `figure` + `figcaption` for images.
- Let typography carry the hierarchy.

## Don't

- Use rounded corners, gradients or colorful buttons.
- Use sans-serif headings.
- Use more than one accent color.

## Custom components

Build new components with the shared tokens so they pick up this style: `color('surface')`, `color('border')`, `color('heading')`, `radius('sm'|'md'|'lg')`, `shadow('sm'|'md'|'lg')`, `config('border-width-base', $display)` and `config('font-family-heading', $typography)`. Check the full token values in `scss/config/_style.scss` under `'editorial'`.
