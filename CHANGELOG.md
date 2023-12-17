# Spruce CSS Changelog

## v2.3.0 (2023-12-17)

### What's Changed
- **NEW** `$form-fieldset`: add `legend-font-family` property.
- **NEW** `$typography`: add `letter-spacing-heading` property.
- **NEW** `$colors`: add `'strong` option under `base` to customize the `<strong>` element's color.
- **BUG** `layout-center()` mixin: add `inline-size: 100%;`.
- **IMPROVEMENT** `layout-grid()`, `layout-flex()`, `layout-sidebar()` mixins: enable multiple `$gap` value like `'m:l'` to control both block and inline values.
- **IMPROVEMENT** `spacer()` function: enable multiple value shorthand like `'m:l'` to control both block and inline values.
- **BREAKING CHANGE** Remove the `transition()` function (you can migrate overt `config()` function or `transition()` mixin.).
- **IMPROVEMENT** `transition()` mixin: enable multiple values for `property` with quotes.
- **NEW** `focus-ring()` mixin: add a new mixin as a shorthand to access the two basic ring styling on focus quickly (input, button).
- Modify the defaults for `config('border-radius-sm', $display)` and `config('border-radius-lg', $display)`.

## v2.2.2 (2023-08-17)

### What's Changed
- Forward plugin folder (generate-normalize mixin).

## v2.2.1 (2023-07-26)

### What's Changed
- `.form-group--stacked`: fix the border-radius when only one element is present.

## v2.2.0 (2023-07-17)

In this release we have a lot of small changes and fixes with some improvement.

### What's Changed
- `.form-group--row`: now uses container query.
- `.form-group--row`: add vertical alignment option.
- Add disabled state range input.
- Add `color-value` function to get only the color value.
- `form-check`: add font-weight option.
- Add drop-shadow button variants.
- Change outline button generator, make it more customizable.
- Add global font `scaler` option.
- Add pointer-events: none; to the `.btn__icon`.

### Bugfix
- `form-label`: font-family not worked.
- `form-description`: make it explicit.
- And many more...

## v2.1.0 (2023-05-28)

### What's Changed
- Use `*-inline-size` and `*-block-size`.

### Bugfix
- Fix responsive table size.

## v2.0.0 (2023-05-04)

### What's Changed
- Reverse `prefers-reduced-motion` behavior.
- Add CSS custom property mode through [css-custom-properties](https://sprucecss.com/docs/customization/settings/#css-custom-properties) setting.
- Fix `selection` mixin
- Use `margin-block-start` at `layout-stack`.
- Rework utility handling.
- Fix `::-webkit-slider-thumb` bug.
- Reorganize generators.

### Breaking changes
Because it is a major release, there are some breaking changes. In general, the changes are more of an optimization and reorganization.

- The most significant change is the [reorganization of variables](https://sprucecss.com/docs/sass/variables/). Now, almost all are in a Sass map and accessible with the [config()](https://sprucecss.com/docs/sass/functions/#config) function. You must use the `config()` function if you plan to use CSS custom properties; otherwise, the `map.get` also works.
- We modified the [generators](https://sprucecss.com/docs/elements/generators/). Now we have one main generator, `generate-styles`, and we can control its values through the [$generators](https://sprucecss.com/docs/sass/variables/#generators) map.

### Others
- Clean up the complete documentation.
- Update all of the Spruce UI components to v2.
- Comment code.
- Start with Sass tests.
- Remove JS code from the package.
- Update coding guides: use quotes when asking for a string value.
- Remove namespaced imports to simplify the use of members (variables, functions, mixins).

## v1.2.1 (2023-01-28)

### Improvements
- Remove unnecessary `$has-outline` argument at `generate-btn` mixin.
- Reorganize print styles into the `generate-print` mixin.

## v1.2.0 (2022-12-27)

### Improvements
- Introduce `$table-stripe` variable to control the table stripe pattern (odd, even).
- Enable selector at [`generate-table`](https://github.com/conedevelopment/sprucecss/blob/main/scss/element/_table.scss) mixin.
- Add `--min-width` variable to `.responsive-table` to control width individually.
- Add `$font-weight-base` variable.
- Allow generic value at `spacer-clamp` mixin (not just map key).
- Add `transition` mixin to get the default transition values easier.

### New features
- Add `.btn--outline-*` button variants.
- Add [`font-face`](https://sprucecss.com/docs/sass/mixins#font-face) mixin.

## v1.1.0 (2022-11-05)

### Improvements
- Rework the focus states by adding `focus-ring()` mixin to control the different variations of focus states.
- Add variables related to focus.
- Make `$font-size-lead` responsive by default.
- Add `$form-check-checkbox-border-radius` variable.
- Change `$form-switch-margin-bottom variable` to `$form-switch-margin-block-start`.
- Handle null values at color mixin.
- Hack that date/time input height in webkit.

### New features
- Add `$form-check-vertical-alignment` variable add `.form-check--vertical-center` and `.form-check--vertical-start`.
- Add `$table-caption-*` variables.

### Breaking changes
Although this is not a major feature, some moderate breaking changes can be related to the `focus-ring()` mixin and its colors.

And other smaller modifications and fixes.

## v1.0.3 (2022-09-15)

### Bugfix
- Fix `.btn--icon` size padding bug.

### Improvements
- Modify `$container-width`'s default value
- Cleanup and fix `text-ellipsis` mixin
- Modify `$form-control-padding-lg`

## v1.0.2 (2022-08-13)

### Bugfix
- Fix field-icon colors

## v1.0.1 (2022-08-13)

### Bugfix
- Fix stylelint error.

## v1.0.0 (2022-08-13)

### New features
- Add new form element stylings: `.form-file`, `.form-range`, `.form-switch`.
- Add different input display options under `.form-group`.
- Add a small set of [print styles](https://sprucecss.com/docs/getting-started/print).
- Add an optional [cookie helper script](https://sprucecss.com/docs/getting-started/js).

### Improvements
- Add `.quote` as a helper for cited blockquote.

### Bugfix
- Fix color input.

And a lot more minor changes and fixes.

## v0.10.0 (2022-07-08)

### New features
- Add `selection` mixin to handle the `::selection` a bit simpler.

### Improvements
- Add `marker` color under `base` to control the list's `::marker`.
- Add `-webkit-tap-highlight-color` with `transparent` value to `html` element.
- Remove `outline` from `[tabindex='-1']:focus`.
- Add `$map` argument to the `color` function to use it any map.

### Bugfix
- Fix `text-ellipsis` multiline bug.

## v0.9.0 (2022-06-24)

### New features
- Add `set-css-variable` mixin and `get-css-variable` function to handle the prefix using CSS variables.

### Improvements
- Add `$form-check-margin` variable to control the `.form-check` vertical offset.
- Modify `layout-*` mixins to accept a shorthand value of for spacer from the $spacers map (now you can use any defined key like m, l, xl and so on).

### Bugfix
- Fix `text-ellipsis` mixin bug.
- Fix null prefix variable generating. Now you can null its value correctly under the $settings map.

## v0.8.1 (2022-06-08)

### Bugfix
- Add `!default` to `$table-line-height`.

## v0.8.0 (2022-06-08)

### New features
- Add `spacer-clamp` function which help to generate `clamp()` functions from the `$spacers` map.

### Improvements
- Add `html-smooth-scrolling` to `$settings`.
- Add `$form-check-font-weight` variable.
- Add `$form-check-line-height` variable.
- Add `$table-line-height` variable.
- Modify `$font-size-ratio`’s default value to `1.25`.

### Bugfix
- Fix `generate-form-label` order under `generate-form` mixin.

## v0.7.1 (2022-04-21)

### Bugfix
- Change `start` to `flex-start` and `end` to `flex-end` at flex properties.

## v0.7.1 (2022-04-18)

### Bugfix
- Remove `background-color` from `transition-property` at `generate-form-check` mixin.

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
- Make `$breakpoints` overwritable by key.
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
