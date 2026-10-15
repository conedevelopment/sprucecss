---
name: sprucecss-blocks
description: Build Spruce UI blocks and components (full-width page sections like heroes, feature grids, pricing, testimonials, FAQ, contact) and compose pages from them with Spruce CSS. Use when the user asks for a landing page section, a block, a page template or a new component in a Spruce CSS project.
---

# Spruce UI blocks and components

Spruce UI has three levels:

- **Components:** small, reusable UI (`.pricing-card`, `.toast`, `.tag-input`).
- **Blocks:** full-width page areas that combine components (`.pricing-block`, `.faq-block`).
- **Pages:** complete templates composed of blocks and components.

Before building a block or a page from scratch, check the online library: it may already exist (see the `sprucecss-library` skill).

## Block anatomy (always)

Every block follows this exact structure:

```html
<section class="features-block" aria-labelledby="features-title">
    <div class="container">
        <div class="features-block__inner">
            <header class="block-heading">
                <p class="block-heading__eyebrow">Features</p>
                <h2 class="block-heading__title" id="features-title">Everything you need</h2>
                <p class="block-heading__text">A short introduction.</p>
            </header>
            <!-- the content of the block -->
        </div>
    </div>
</section>
```

- `.{name}-block`: the full-width `section`, labelled by its heading (`aria-labelledby`). It owns the vertical padding, the background and any color token overrides. Nothing else.
- `.container`: centers and limits the width (`layout-center`). Never put the max width or the side padding on the block or the inner element.
- `.{name}-block__inner`: the layout of the content: a flex column with `gap: spacer('l')` (not `layout-stack()`), a grid or two columns. Spacing rules: see the `sprucecss-spacing` skill.
- Every other element is a BEM element of the block: `.{name}-block__grid`, `.{name}-block__item`.

```scss
@use 'sprucecss/scss/spruce' as *;

.features-block {
  padding-block: spacer-clamp('xl', 'xxl');

  &__inner {
    display: flex;
    flex-direction: column;
    gap: spacer('l');
  }

  &__grid {
    @include clear-list;
    @include layout-grid('m', 16rem);
  }
}
```

## Data-driven content

Blocks render their content from one object with a default, so the same markup works with different copy:

```html
{%- set _s = featuresBlock or {
    "heading": { "eyebrow": "Features", "title": "Everything you need", "id": "features-title" },
    "items": [{ "icon": "zap", "title": "Fast", "text": "Around 9 KB of CSS." }]
} %}
```

- Name the object `{camelCaseName}Block` (`featuresBlock`, `heroCenteredBlock`).
- A page sets the object before the include to replace the copy; never fork the block markup for new copy.
- Components that pages reuse follow the same pattern (`hero`, `logoCloud`, `pricingPlans`, `testimonials`).

## Composing pages

```html
{% set pricingBlock = { ... } %}
{% include "site-header.html" %}
<main>
    {% include "block/pricing.html" %}
    <div class="l-page__alt">{% include "block/faq.html" %}</div>
    {% include "block/cta.html" %}
</main>
{% include "site-footer.html" %}
```

Load the stylesheet of every block **and** of every component it combines (for example, the pricing block needs the segmented control and the pricing card styles). Alternate backgrounds with a wrapper (`.l-page__alt { background-color: color('surface-muted'); }`), not by changing the blocks.

When two blocks meet on the same background, the second one drops its top padding, and consecutive blocks on the same alternate background share one wrapper (see the `sprucecss-block-rhythm` skill):

```scss
.l-page {
  > :not(.l-page__alt) + :not(.l-page__alt),
  &__alt > * + * {
    padding-block-start: 0;
  }
}
```

## Rules for blocks and components

1. **Spacing from the parent:** sections under `__inner` sit in a flex column with a `gap`, every text group (also the wrapper `div` next to a button or a badge in a row) has a class and `layout-stack()`, children don't reset their own vertical margins, and inline elements in a stack are wrapped in a block (see the `sprucecss-spacing` skill).
2. **Tokens only:** `color('surface' | 'surface-muted' | 'border' | 'heading' | 'text' | 'muted' | 'primary')`, `radius()`, `shadow()`, `config('border-width-base', $display)`, `spacer()`, `spacer-clamp()`, `font-size()`, `color-alpha()`, `color-tint()`. Then they follow the dark mode and every design style.
3. **Logical properties only** (see the table below). Mirror directional icons and transforms in RTL with `[dir='rtl']`.
4. **Semantics:** a `section` labelled by its heading, lists for collections (`role="list"` when the list style is removed), `article` for cards, `dl` for key–value data, `figure`/`blockquote` for quotes, `time datetime` for dates, `address` for addresses.
5. **Accessibility:** visible focus (`:focus-visible` with `color('focus-ring')`), labels for every control, hidden text for icon-only buttons and for meaning conveyed by color or icons ("Rated 4 out of 5", "Included"), `a11y-card-link` for clickable cards, live regions (`aria-live="polite"`) for filter results.
6. **JavaScript:** vanilla, dependency-free, wrapped in an IIFE, hooked to `data-*` attributes, and progressive: the block must make sense without it (filters show everything, links work, the dialog falls back to a link).
7. **Motion:** wrap animations in `@include motion-safe`.
8. **Images:** `loading="lazy"` below the fold, never for the hero image (use `fetchpriority="high"`); empty `alt` when the text next to it says the same.
9. **Headings:** the hero holds the only `h1`; blocks use `h2` (via the block heading) and `h3` for items.

## Logical properties

| Physical (don't) | Logical (do) |
|---|---|
| `width`, `height` | `inline-size`, `block-size` |
| `min-width`, `max-height` | `min-inline-size`, `max-block-size` |
| `margin-left`, `margin-right` | `margin-inline-start`, `margin-inline-end` (or `margin-inline`) |
| `padding-top`, `padding-bottom` | `padding-block-start`, `padding-block-end` (or `padding-block`) |
| `border-left` | `border-inline-start` |
| `border-top-left-radius` | `border-start-start-radius` |
| `top`, `right`, `bottom`, `left` | `inset-block-start`, `inset-inline-end`, `inset-block-end`, `inset-inline-start` (or `inset`, `inset-inline`, `inset-block`) |
| `text-align: left` | `text-align: start` |
| `float: left` | `float: inline-start` |
| `100vw`, `100vh` | `100vi`, `100dvb` |

Exceptions without logical equivalents (handle RTL with `[dir='rtl']`): `background-position`, `translate`/`transform` offsets, gradient directions, `clip-path` insets.

## Checklist for a new block

- [ ] `.name-block > .container > .name-block__inner`, a labelled `section`.
- [ ] Uses the block heading and a `nameBlock` data object with a default.
- [ ] `__inner` is a flex column with a gap; every text group (no bare `<div>` around a title and a text) uses `layout-stack()`; no margin resets on stack children.
- [ ] Tokens and logical properties only; works in dark mode, RTL and every style.
- [ ] Keyboard and screen reader friendly; works without JavaScript.
- [ ] Lists the components it combines and their stylesheets.
