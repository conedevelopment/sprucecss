# Changelog

## v0.2.0 (2022-01-28)

- Add `$btn-font-family` to control the button's font family.
- Add `$heading-font-weight` to control the heading's font-weight.
- Rename some keys in the `$colors` map (`mark-color` : `mark-foreground`, `code-color` : `code-foreground`).
- Reorganize the recurrent colors into variables.
- Modify `btn-variant()` mixin: add hover foreground color.
- Add [icon button](https://sprucecss.com/docs/elements/buttons#icon) variant (`.btn--icon`).
- Global switch to `color()` function's fallback value under the [`$settings`](https://sprucecss.com/docs/sass/variables#settings) map.
- Modify the [`scrollbar()`](https://sprucecss.com/docs/sass/mixins#scrollbar) mixin to accept hover thumb background-color value.
- Make `$breakpoints` overwriteable by key.
- Fix some missing !default at variable declaration.
- Modify `font-size()` and `responsive-font-size()` function to accept optimal size value. The optimal value will fallback to a global settnigs under the `$settings` map.

## v0.1.3 (2022-01-04)

- Add normalize.css as a dependency

## v0.1.2 (2021-12-30)

- Fix $foreground typo at btn-variant() mixin (_button.scss)

## v0.1.1 (2021-12-30)

- Add Autoprefixer to CSS compile
- Add compiled CSS to the repository
- Fix Stylelint errors
- Minor fixes and cleanup
- Colorize list bullets with ::marker

## v0.1.0 (2021-12-19)

Initial release
