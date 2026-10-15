---
name: sprucecss-block-rhythm
description: Keep the vertical rhythm between the blocks of a Spruce CSS page - when two blocks meet on the same background, the second one drops its top padding (padding-block-start: 0), and consecutive blocks on the same alternate background share one wrapper. Use whenever you compose or review a page of blocks, add or reorder a block, change a block's background, or see a doubled gap between two sections.
---

# Block rhythm: one background, one padding

Every block owns its vertical padding (`padding-block: spacer-clamp('xl', 'xxl')`). On its own background that padding is the breathing room. But when two blocks meet **on the same background**, the bottom padding of the first and the top padding of the second add up to a gap twice as big as anywhere else, and the page looks broken.

**The rule:** if a block follows a block with the same background, its `padding-block-start` is `0`. The previous block's bottom padding already separates them. When the background changes, both keep their padding (the color change is the separator and each side needs its own room).

The page solves this, never the block: blocks stay reusable, and only the page knows what sits next to what.

## 1. Group consecutive blocks on the same background

The background of a page section comes from a wrapper (`.l-page__alt { background-color: color('surface-muted'); }`), not from the block. Blocks on the same alternate background share **one** wrapper; two wrappers of the same color are never siblings.

```html
<!-- Don't: two wrappers, the same background, a doubled gap. -->
<div class="l-page__alt">{% include "block/steps.html" %}</div>
<div class="l-page__alt">{% include "block/timeline.html" %}</div>

<!-- Do: one wrapper for the run. -->
<div class="l-page__alt">
    {% include "block/steps.html" %}
    {% include "block/timeline.html" %}
</div>
```

## 2. Collapse the top padding with one rule per page

The direct children of `main` are blocks on the page background, page sections (a `div` with padding around a component, like `.l-page__hero` or `.l-page__section`) and background wrappers. Siblings that are not wrappers share the page background; siblings inside a wrapper share the wrapper's.

```scss
@use 'sprucecss/scss/spruce' as *;

.l-page {
  // One background, one padding: a block that follows a block on the same background drops its top padding,
  // the bottom padding of the previous one already separates them. `__alt` starts a new background.
  > :not(.l-page__alt) + :not(.l-page__alt),
  &__alt > * + * {
    padding-block-start: 0;
  }

  &__alt {
    background-color: color('surface-muted');
  }
}
```

- The rule sets the padding on the direct child, so it works for a block (`section.x-block`) and for a page section (`div.l-page__section` with its own padding) alike.
- The page stylesheet loads after the block stylesheets and the selector is more specific than `.x-block`, so it wins without `!important`.
- Use the page's own root class (`.l-home`, `.l-page`) in the selector, and write the class names out in `:not()` (no `&` inside it).
- Don't wrap a block in a plain `div` (for an anchor `id`, for example): the rule would hit the padding-less `div`, not the block. Link to the block's heading `id`, or put the `id` on the background wrapper.

## 3. List every other background in the `:not()`

Anything that does not sit on the page background, or is visually separated from it, starts a new section and must be excluded on both sides:

- **Background wrappers:** `.l-page__alt`, `.l-page__brand`, `.l-page__dark`…
- **Bordered bands:** a wrapper with `border-block` (like a logo cloud band) is separated by its border; keep the padding on both sides.
- **Blocks that paint their own full-width background:** a `--brand` modifier (`.stats-block--brand`), a hero with a colored background (`.hero-signup-block`). Either wrap them in a background wrapper or add them to the `:not()`.

```scss
.l-home {
  > :not(.l-home__alt, .l-home__band, .stats-block--brand) + :not(.l-home__alt, .l-home__band, .stats-block--brand),
  &__alt > * + * {
    padding-block-start: 0;
  }
}
```

A block whose background is only a gradient that fades out at its bottom (a hero glow) counts as the page background.

## 4. What it doesn't touch

- **The bottom padding:** only the start side collapses, so the last block before a background change (or before the footer) keeps its full padding.
- **Padding inside a block:** boxed blocks (a CTA box, an app banner) keep their inner padding; the rule only touches the block's own `padding-block-start`.
- **The block stylesheets:** never remove the top padding in the block itself or add a "no top padding" modifier per page. A block can't know what's above it.

## Checklist

- [ ] No two background wrappers of the same color are siblings; a run of blocks on one background shares one wrapper.
- [ ] The page stylesheet has the one-background-one-padding rule for `main > *` and `__alt > *`.
- [ ] Every wrapper, bordered band and self-colored block is listed in the `:not()`.
- [ ] Between two blocks on the same background there is exactly one block padding (`spacer-clamp('xl', 'xxl')`), the same as at the top and the bottom of a background run.
- [ ] Reordering the blocks needs no CSS change: the rule follows the markup.
