# Spruce CSS Changelog

## v3.0.0 (2026-10-03)

The biggest Spruce CSS release so far: **design styles** (one markup, many looks), a built-in dark mode, new elements, new tokens, more customization options for every element and AI skills. The public Sass API stays compatible with v2: no mixin, function, variable or map key was removed or renamed, and with the default configuration every v2 declaration is still generated. The changes in the default output are listed under [Changes in the default output](#changes-in-the-default-output).

### Design styles (new)
- **NEW** Style presets: restyle the same markup with `data-spruce-style="…"` on `<html>` or on any element. Built-in presets: `minimal`, `brutalist`, `soft`, `glass`, `corporate`, `playful`, `editorial`, `terminal`.
- **NEW** `$styles` map (extend or overwrite the presets), `$style-presets`, `$style-shorthands` (`radius-sm`, `radius-md`, `radius-lg`, `border-width`).
- **NEW** `styles` setting (`attribute`, `default`, `font-path`, `include`) and `styles` content generator (off by default). Set `'default'` to apply a style at compile time without the attribute.
- **NEW** Style hooks: in custom property mode every component value can be overwritten from any ancestor with a namespaced custom property, like `--spruce-btn-padding` or `--spruce-form-control-border-radius`. Controlled by the new `style-hooks` setting (default: `true`).
- **NEW** Presets can ship fonts with a `font-faces` list. The Brutalist preset bundles Archivo and Archivo Black (`font/`, SIL OFL) with tuned `ascent-override`/`descent-override`, so uppercase labels are vertically centered; the Editorial preset bundles Fraunces for its headings and uses a sans-serif body. Set `font-path` to `null` to skip the `@font-face` rules.
- **NEW** `generate-style()`, `generate-style-presets()` mixins and `style-rule-selector()` function. Preset rules stop at the boundary of a nested scope with a different style.
- **NEW** `generate-variables()` mixin: `$hook` argument.

### Dark mode (new)
- **NEW** `dark-mode` content generator (off by default): generates the dark color custom properties, `color-scheme: dark` and the regenerated SVG field icons.
- **NEW** `$default-dark-colors` map (a complete dark palette); your `$dark-colors` map is deep-merged into it.
- **NEW** `dark-mode` setting (`selector`, `light-selector`, `prefers-color-scheme`) to follow the system preference too.
- **NEW** `dark-mode()` mixin, which works at the root level and inside a rule.
- **NEW** `generate-field-icons()` mixin to regenerate the select, checkbox, radio, switch and validation icons for any color map.

### Elements
- **NEW** `details` / `summary` styling (`details` generator, `$details` map).
- **NEW** `dialog` styling with backdrop (`dialog` generator, `$dialog` map).
- **NEW** `progress` (with indeterminate state) and `meter` styling (`progress` generator, `$progress` map). The tracks are flat in every browser (Firefox's default gradient on the meter is removed).
- **NEW** `pre` code block styling and `pre code` reset, `kbd` with border, monospace font stack for `code`, `kbd`, `samp`, `pre`.
- **NEW** `video` is responsive.
- **NEW** `.sr-only-focusable` class.
- **NEW** Opt-in text utilities (`'utilities': ('text': true)`): `.text-start`, `.text-center`, `.text-end`, `.text-sm`, `.text-lg`, `.text-muted`, `.text-mono`, `.text-uppercase`, `.text-balance`, `.text-pretty`, `.text-nowrap`, `.text-truncate`.
- **NEW** Opt-in layout utilities (`'utilities': ('layout': true)`): `.l-center`, `.l-stack`, `.l-cluster`, `.l-grid`, `.l-sidebar`, `.l-switcher`, `.l-reel`, configurable with custom properties.

### Buttons
- **NEW** Variants: `.btn--danger`, `.btn--outline-danger`, `.btn--soft-{primary|secondary|danger}`, `.btn--ghost-{primary|secondary|danger}`, `.btn--link`.
- **NEW** Modifiers: `.btn--pill`, `.btn--loading`, `.btn--disabled` / `[aria-disabled='true']` (it was documented but missing).
- **NEW** `.btn-group` and `.btn-group--vertical` (`btn-group` generator, `generate-btn-group()` mixin).
- **NEW** `btn-variant-soft()`, `btn-variant-ghost()`, `btn-variant-link()` mixins.
- **NEW** `$btn` keys: `box-shadow`, `disabled-opacity`, `letter-spacing`, `line-height`.
- **NEW** `generate-btn()` mixin: `$has-modifiers` argument.

### Forms
- **NEW** `.form-range--sm` and `.form-range--lg` (they were documented but missing), `$form-range-sm`, `$form-range-lg` maps.
- **NEW** `.form-label--required` with the `required-content` and `required-gap` keys of `$form-label`; `$form-label` `line-height` key.
- **NEW** Read-only state for `.form-control` (`background-readonly` form color, `null` by default).
- **NEW** `$form-control` keys: `box-shadow`, `letter-spacing`.

### Tables
- **NEW** `.table--bordered`, `.table--middle`, `.table--sticky-header`.
- **NEW** `$table` keys: `border-width`, `caption-text-align`, `heading-font-size`, `heading-font-weight`, `heading-letter-spacing`, `heading-text-transform`, `vertical-align`; `heading-background` table color.

### Tokens, variables and settings
- **NEW** `$shadows` map (`xs`, `sm`, `md`, `lg`, `xl`, `inner`), generated as `--spruce-shadow-*` in custom property mode.
- **NEW** `$z-indexes` map.
- **NEW** `$display` keys: `border-radius-md`, `border-radius-pill`, `border-width-base`.
- **NEW** `$typography` keys: `blockquote-border-width`, `blockquote-font-size`, `blockquote-font-style`, `font-family-mono`, `font-size-code`, `font-weight-strong`, `letter-spacing-base`, `link-font-weight`, `link-text-decoration`, `link-text-decoration-hover`, `link-text-decoration-thickness`, `link-text-underline-offset`, `list-gap`, `pre-border-radius`, `pre-padding`, `text-transform-heading`, `text-wrap-base`, `text-wrap-heading`.
- **NEW** `$divider` and `$media` maps.
- **NEW** Colors: base `border-strong`, `focus-ring`, `kbd-border`, `muted`, `overlay`, `pre-background`, `pre-foreground`, `surface`, `surface-muted`; btn `danger-*`; form `background-readonly`, `progress-background`, `progress-foreground`, `required`; table `heading-background`.
- **NEW** Settings: `accent-color`, `dark-mode`, `reduced-motion`, `scroll-margin`, `style-hooks`, `styles`, `utilities.layout`, `utilities.text`.
- **NEW** Generators: content `dark-mode`, `details`, `dialog`, `progress`, `styles`; form `btn-group`.

### Functions and mixins
- **NEW** `shadow()`, `radius()`, `z-index()`, `color-alpha()`, `color-tint()` functions.
- **NEW** `breakpoint-down()`, `breakpoint-between()`, `container-query()` mixins.
- **NEW** `layout-cluster()`, `layout-switcher()`, `layout-reel()` mixins.
- **NEW** `visually-hidden-focusable()`, `motion-safe()`, `motion-reduce()`, `cover()` mixins.
- **IMPROVEMENT** `layout-flex()` mixin: accepts the `'m:l'` gap shorthand.
- **IMPROVEMENT** `visually-hidden()` mixin: adds `clip-path: inset(50%)` next to the deprecated `clip`.

### AI skills (new)
- **NEW** The package ships agent skills in the `skills/` folder: `sprucecss`, `sprucecss-library` (use the Spruce UI components, blocks and pages from the online library), `sprucecss-styles`, `sprucecss-spacing` (spacing from the parent), `sprucecss-list-layout` (lists whose items sit side by side), `sprucecss-blocks` (block anatomy, components, pages, logical properties), `sprucecss-block-rhythm` (one background, one padding between the blocks of a page) and one design skill per style preset.

### Bug fixes
- **FIX** `$form-control-lg`, `$form-control-sm`, `$form-check-lg` used non-existing `size-lg` / `size-sm` typography keys, so their `font-size` was always `null`. Small and large inputs and large checkboxes now get their intended font sizes.
- **FIX** `.form-check--sm` and `.form-check--lg` generated the `$form-control-sm/lg` variables instead of `$form-check-sm/lg` in custom property mode, so the size modifiers had no effect.
- **FIX** `spacer('xs:m')` returned a list with a leading `null`.
- **FIX** The large color input used the physical `height` property instead of `block-size` without the custom property mode.
- **FIX** The switch icons used the `'true'` string instead of the `true` boolean when getting the raw color.
- **FIX** `config()` printed the key name as a separate error before the real error message.

### Changes in the default output
These are visual changes with the default configuration; review them when you upgrade.
- Headings use `text-wrap: balance` (set `'text-wrap-heading': null` in `$typography` to turn it off).
- `code`, `kbd`, `samp`, `pre` use the `font-family-mono` stack instead of the browser's `monospace`.
- `kbd` has a border and an inset shadow; `pre` has a background, padding and radius, and `pre code` no longer gets the inline code background.
- `details`, `dialog`, `progress` and `meter` are styled. The selectors use `:where()`, so their specificity is zero and any of your existing styles win. Turn them off with the `details`, `dialog` and `progress` generators.
- `html` gets `accent-color: color('primary')` for native controls (turn it off with the `accent-color` setting).
- The small/large form control and checkbox fixes above change their sizes.
- In custom property mode the component custom properties reference their hooks (`--spruce-padding: var(--spruce-btn-padding, 0.75em 1em)`); `figcaption`, links and lists use custom properties. The computed values are the same.

### Tooling
- Update every dependency; replace the unmaintained `npm-run-all` with `npm-run-all2`.
- Replace Jest with the Node.js test runner (`node --test`); the Sass test suite works again and covers the new functions.
- Add `sass` and `style` entry points to `package.json` (for `pkg:sprucecss` imports and CSS bundlers).
- **NEW** `css/spruce.complete.css` and `css/spruce.complete.min.css`: a compiled bundle with every opt-in feature (dark mode, style presets, layout and text utilities) for plain CSS and CDN users.
- The CI workflow runs the unit tests and the production build.
- The preview got a style switcher, an overview page, a styles comparison page and pages for every new element, layout and utility.

## v2.3.5 (2026-03-11)

### What's Changed
- Clear Sass if deprecation warnings

## v2.3.4 (2025-04-09)

### What's Changed
- Clear Sass deprecation warnings

## v2.3.3 (2024-08-20)

### What's Changed
- Revert `clear-list` mixin's margin property.

## v2.3.2 (2024-08-20)

### What's Changed
- **FIX** `transition`: set a fallback default CSS custom property if user has reduced motion.
- `$form-control`: add `font-family` property.
- `$form-label`: add `text-transform` property.
- `$form-switch`: add separate colors.

## v2.3.1 (2023-12-18)

### What's Changed
- **FIX** `short-ring()`: fix the return at the `button` option.

## v2.3.0 (2023-12-17)

### What's Changed
- **NEW** `$form-fieldset`: add `legend-font-family` property.
- **NEW** `$typography`: add `letter-spacing-heading` property.
- **NEW** `$colors`: add `'strong` option under `base` to customize the `<strong>` element's color.
- **FIX** `layout-center()` mixin: add `inline-size: 100%;`.
- **IMPROVEMENT** `layout-grid()`, `layout-flex()`, `layout-sidebar()` mixins: enable multiple `$gap` value like `'m:l'` to control both block and inline values.
- **IMPROVEMENT** `spacer()` function: enable multiple value shorthand like `'m:l'` to control both block and inline values.
- **BREAKING CHANGE** Remove the `transition()` function (you can migrate overt `config()` function or `transition()` mixin.).
- **IMPROVEMENT** `transition()` mixin: enable multiple values for `property` with quotes.
- **NEW** `short-ring()` mixin: add a new mixin as a shorthand to access the two basic ring styling on focus quickly (input, button).
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
