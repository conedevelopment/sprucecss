---
name: sprucecss-list-layout
description: Lay out a ul or ol whose items are not under each other (a row, a cluster, a grid, a flex or grid list with a gap) in Spruce CSS - clear the base list's owl selector on the li elements (margin-block: 0) and set their padding-block to 0. Use whenever you style a list as tags, links, logos, chips, cards, steps, a toolbar or any grid of li elements, or when the second and later items of a list sit lower than the first.
---

# Lists whose items sit side by side

Spruce styles every `ul` and `ol` as a vertical stack: the base typography includes `layout-stack(config('list-gap', $typography))` on them, a lobotomized owl:

```css
ul > * { margin-block: 0; }
ul > * + * { margin-block-start: 0.25rem; } /* list-gap */
```

That's right for a list of lines. But once the items are **not under each other** (a flex row, a cluster, a grid), the owl still pushes the second and every later item down: the first tag sits higher than the others, the first card of a grid row is shorter, and a grid's `gap` gets an extra margin on top.

## The rule

When a `ul` or `ol` lays out its `li` elements side by side (or in a grid with a `gap`), **clear the owl on the list's items and set their block padding to 0**:

```scss
.projects-block {
  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: spacer('xxs');
    list-style: none;
    padding: 0;

    // The items sit side by side: clear the stack margins of the base list style.
    > li {
      margin-block: 0;
      padding-block: 0;
    }
  }
}
```

- Put the reset on the **list** (`> li`), not on the item class. The list is the one that changes the layout, so it's the one that undoes the stack. It also covers plain `li` elements without a class.
- `margin-block: 0` clears both owl margins; `padding-block: 0` makes sure no list or item style adds vertical space that the `gap` doesn't control.
- Space the items with the parent's `gap` (`display: flex`, `layout-cluster()`, `display: grid`, `layout-grid()`), never with margins on the items.
- `@include clear-list` (or `list-style: none; margin: 0; padding: 0;`) resets the **list**, not its items: you still need the `> li` reset.
- Don't patch it with `margin: 0 !important` on the item class. That fights the owl one item at a time, and it breaks the next item that has no class.

## When the item is a card with its own padding

A `li` can be the card itself (`<li class="offer-block__item">` with a background, a border and a padding). Then `> li { padding-block: 0; }` would remove the card's padding, because `.list > li` is more specific than `.list__item`. Reset only the margin:

```scss
&__items {
  display: grid;
  gap: spacer('m');
  list-style: none;
  margin: 0;
  padding: 0;

  > li {
    margin-block: 0; // the li is a card: its own padding stays
  }
}
```

If one item needs its own vertical margin on purpose (a featured pricing tier that rises above the others), give it a selector that's more specific than the reset:

```scss
&__tiers {
  > li {
    margin-block: 0;
  }

  > .pricing-tiers-block__tier--featured {
    @include breakpoint('md') {
      margin-block-start: calc(#{spacer('m')} * -1);
    }
  }
}
```

## When the items are under each other

A vertical list keeps the base stack, or replaces it with a parent `gap` (`display: flex; flex-direction: column; gap: …`). With a `gap`, clear the owl too, or the gap and the margin add up. A plain vertical list in running text needs nothing.

## Checklist

- [ ] Every `ul`/`ol` with `display: flex`, `display: grid`, `layout-cluster()` or `layout-grid()` has a `> li { margin-block: 0; padding-block: 0; }` rule.
- [ ] When the `li` is a padded card, the reset is `margin-block: 0` only.
- [ ] No `margin: 0 !important` on item classes to fight the list stack.
- [ ] The space between the items comes from the list's `gap`.
- [ ] The first item lines up with the others (check a wrapped row and the first row of a grid).
