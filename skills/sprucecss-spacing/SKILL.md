---
name: sprucecss-spacing
description: Space elements the Spruce CSS way: the parent sets the spacing (flex or grid gap for sections, layout-stack() for every text group, including the wrapper div next to a button or badge), never the children. Use whenever you write or review the SCSS layout of a Spruce CSS component, block or page, or fix a missing or doubled gap between elements.
---

# Spacing in Spruce CSS

In Spruce, the space between elements comes from the **parent**, almost never from the children. Pick the parent's tool by what its children are.

## 1. Sections under `__inner`: flex column with a gap

The `__inner` element of a block (and any wrapper whose direct children are sections: a heading group, a grid, a list, a form, a table) is a flex column with a gap:

```scss
.features-block {
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

- The default is `gap: spacer('l')`; use another spacer only when the design needs it.
- Don't use `layout-stack()` here: it sets `margin-block-start` on the children, and a child that resets its own margin (`@include clear-list`, `margin: 0`, `fieldset`, `figure` resets) silently cancels the gap. A `gap` can't be cancelled by the children.
- Flex margins don't collapse: a direct child with browser margins (`p`, `dl`, `figure`, a list without `clear-list`) adds them to the gap. Reset them on the child (`margin-block: 0`); that's fine here, because the parent is not a stack.
- A child centered with `margin-inline: auto` and a `max-inline-size` no longer stretches in a flex column: give it `inline-size: 100%` too.
- A grid (`layout-grid()`, columns) or a two-column layout is fine instead, when the layout needs it.

## 2. Text children: `layout-stack()`

When an element holds text (`h*`, `p`, `ul`, `dl`, `blockquote`, a meta line), like a card body, a feature item or a heading group, use `layout-stack()` with a gap that fits the content:

```scss
.features-block__item {
  @include layout-stack('xs'); // icon, title, text
}

.block-heading {
  @include layout-stack('xs'); // eyebrow, title, lead
}
```

`layout-stack()` is a lobotomized owl (`> * { margin-block: 0 }` and `> * + * { margin-block-start: $gap }`): it removes the browser's default margins of `p`, `h1`–`h6`, `ul` and the like, and puts the gap between the siblings. Typical gaps: `'xxs'` label and value, `'xs'` title and text, `'s'` text groups, `'m'` card sections.

Flex or grid with a `gap` also works for text, but then you have to reset the margins of the children yourself (`margin-block: 0` on every `h*` and `p`), so prefer `layout-stack()`. Keep flex when the layout needs it: pushing a button to the bottom of an equal-height card (`margin-block-start: auto`), centering a narrow form, or `flex-grow`.

### Every text group gets a class and a stack

A row often puts a group of text next to something else: a job title and its meta next to a badge, a heading and a description next to a button. The row is a flex container, and the text group is a wrapper `div`. **That wrapper must never be a bare `<div>`**: give it a BEM class and `layout-stack()`. Without it, the `h*` and `p` inside keep the browser's margins (about `1em`), and the spacing turns uneven or gets patched with one-off margins on the children.

```html
<!-- Don't: a bare wrapper, the title and the meta keep their browser margins. -->
<li class="careers-block__job">
    <div>
        <h3 class="careers-block__title"><a href="#">Design Systems Intern</a></h3>
        <p class="careers-block__meta">Design · Remote</p>
    </div>
    <span class="badge">Internship</span>
</li>

<!-- Do: the wrapper is a named text group with a stack. -->
<li class="careers-block__job">
    <div class="careers-block__info">
        <h3 class="careers-block__title"><a href="#">Design Systems Intern</a></h3>
        <p class="careers-block__meta">Design · Remote</p>
    </div>
    <span class="badge">Internship</span>
</li>
```

```scss
.careers-block {
  &__job {
    align-items: center;
    display: flex;
    gap: spacer('m');
    justify-content: space-between;
  }

  &__info {
    @include layout-stack('xxs'); // title, meta
  }
}
```

Name the wrapper after its role: `__info`, `__heading` (a title with a description or an eyebrow), `__body`, `__text`, `__content`. This applies to every header with a title and a subtitle next to an action, every list row with a name and a detail, and every card body.

## 3. Children don't set their own vertical spacing

Inside a stack, don't write `margin: 0`, `margin-block: 0` or `@include clear-list` on the children: they override the stack's `margin-block-start` (same specificity, later in the file) and the gap disappears.

```scss
// Don't: the title loses the stack gap.
.card {
  @include layout-stack('s');

  &__title { margin: 0; }
}

// Do: the stack already resets the margins.
.card {
  @include layout-stack('s');

  &__title { font-size: font-size('h4'); }
}
```

- For a list inside a stack, reset only what the stack doesn't: `list-style: none; padding: 0;` instead of `@include clear-list`.
- A list whose items sit side by side (flex, grid, cluster) clears the owl of the base list style on its items: `> li { margin-block: 0; padding-block: 0; }` (see the `sprucecss-list-layout` skill).
- `figure`, `blockquote` and `dd` have browser **inline** margins: reset them with `margin-inline: 0`, not `margin: 0`.
- The first child of a stack and a wrapper that is not a stack (flex or grid with `gap`) may reset margins freely.

## 4. Inline elements: wrap them in a block

`margin-block-start` has no effect on an inline element (`a`, `span`, `time`, `strong`, `label` without a display value). If an inline element is a child of a stack, and not the first one, wrap it in a block element:

```html
<div class="feature-media-block__content">   <!-- layout-stack -->
    <h3>…</h3>
    <p>…</p>
    <p class="feature-media-block__more"><a href="#">Learn more</a></p>
</div>
```

Elements with `display: inline-block`, `inline-flex` (like `.btn`, `.badge`, `.form-check`) or `block` take the margin, so they don't need a wrapper.

## Checklist

- [ ] Every `__inner` (and every wrapper of sections) is `display: flex; flex-direction: column; gap: spacer('l');` or a grid.
- [ ] Every text group uses `layout-stack()` with a gap that fits it, including the wrapper next to a button or a badge in a row: no bare `<div>` around an `h*` and a `p`.
- [ ] Text children of a flex or grid container (one that stays flex for layout) have `margin-block: 0`.
- [ ] No `margin: 0`, `margin-block: 0` or `clear-list` on a stack's children (except the first one); lists use `list-style: none; padding: 0;`.
- [ ] No plain inline element after the first child of a stack.
- [ ] Every list laid out as a row or a grid has `> li { margin-block: 0; padding-block: 0; }` (margin only when the `li` is a padded card).
