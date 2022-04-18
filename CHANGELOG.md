# Spruce CSS Changelog

## v0.7.0 (2022-04-18)

### Improvements
- Add smaller `line-height` to `.form-description`, `.field-feedback` and `.form-label`.
- Update `transition` properties to use new function.
- Update `.form-control`’s `transition` properties.
- Stylelint: enable underscores in class names and placeholders (BEM).

### Bugfix
- Fix $font-family-* quotes.

## v0.6.0 (2022-04-05)

### New features
- Add [transition](https://sprucecss.com/docs/sass/functions#transition) function.

### Improvements
- Add scrollbar colors to $colors map.
- Set layout-stack `$width`'s default value to `false`.
- Set Stylelint's `color-function-notation` to `modern`.

## v0.5.0 (2022-03-15)

### New features
- Add word-wrap mixin.
- Add in-line table style.
- Add aspect-ratio-* utility classes.

### Improvements
- Rework form-control generator.
- Add display: block; to iframes.

### Removed
- Remove aspect-ratio mixin.

## v0.4.1 (2022-03-03)

### Bugfix
- Fix import path at elements.

## v0.4.0 (2022-03-03)

### Improvements
- Add generator mixins.
- Rework preview.

## v0.3.1 (2022-02-23)
- Fix typos.

## v0.3.0 (2022-02-22)

### New features
- Add reset ul, ol mixin with `clear-list()`.
- Add clear button style mixin with `clear-btn()`.
- Add `a11y-card-link()` mixin.
- New table variants: sm size, bordered, clear-border style.
- Add `hidden` utility class.
- Add `generate-color-variables()` mixins to generate color variables.
- Add `field-icon()` mixin to get and color form element images.

### Improvements
- `::selection' add foreground color variable.
- Move `$prefix` under the `$settings` map.
- Use `as *` import internally.
- Add color variable to the table.
- Add font-size variable to `.form-check--lg`.
- Use newer HSL syntax at colors.
- Fieldset stack gap got a variable.
- Button icon got a new, smaller size option.
- `layout-stack()` has !important parameter.
- Reorganize `.form-check` styling under a mixin.
- Simplify button declaration colors (now we can init a button with only two colors).

### Bugfix
- `$font-size-lead`: add !default.

## v0.2.0 (2022-01-28)

### New features
- Add [icon button](https://sprucecss.com/docs/elements/buttons#icon) variant (`.btn--icon`).

### Improvements
- Add `$btn-font-family` to control the button's font family.
- Add `$heading-font-weight` to control the heading's font-weight.
- Rename some keys in the `$colors` map (`mark-color` : `mark-foreground`, `code-color` : `code-foreground`).
- Reorganize the recurrent colors into variables.
- Modify `btn-variant()` mixin: add hover foreground color.
- Global switch to `color()` function's fallback value under the [`$settings`](https://sprucecss.com/docs/sass/variables#settings) map.
- Modify the [`scrollbar()`](https://sprucecss.com/docs/sass/mixins#scrollbar) mixin to accept hover thumb background-color value.
- Make `$breakpoints` overwriteable by key.
- Modify `font-size()` and `responsive-font-size()` function to accept optimal size value. The optimal value will fallback to a global settnigs under the `$settings` map.

### Bugfix
- Fix some missing !default at variable declaration.

## v0.1.3 (2022-01-04)

### Bugfix
- Add normalize.css as a dependency

## v0.1.2 (2021-12-30)

### Bugfix
- Fix `$foreground` typo at `btn-variant()` mixin (_button.scss)

## v0.1.1 (2021-12-30)

### Improvements
- Colorize list bullets with `::marker`
- Add Autoprefixer to CSS compile
- Add compiled CSS to the repository
- Fix Stylelint errors
- Minor fixes and cleanup

## v0.1.0 (2021-12-19)

Initial release
