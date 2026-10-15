# Spruce CSS tests

Unit tests for the Sass source, written with [True](https://www.oddbird.net/true/) and run by the Node.js test runner:

```shell
npm test
```

A Sass module can be configured only once per compilation, so every configuration has its own entry file. `sass.test.js` compiles each of them:

| Entry | Configuration | Suites |
|---|---|---|
| `test.scss` | The defaults (no custom properties). | `function/`, `mixin/`, `element/`, `form/`, `generator/` |
| `test-custom-properties.scss` | Custom property mode, color fallback, print, reduced motion, scroll margin, text and layout utilities. | `custom-properties/` |
| `test-theme.scss` | A custom prefix, a class-based dark mode that follows the system, hooks off, a default style, an include list and a custom preset. | `theme/` |

## Writing tests

- Functions: `assert-equal`, `assert-true`, `assert-false`. Compare `clamp()` and other string results as strings: `'#{spacer-clamp('m', 'l')}'`.
- Small mixins: `assert` with `output` and `expect` for the exact output.
- Generators: `output(false)` (no wrapper selector, so `@at-root` rules work) with `contains(false)` for a subset of the rules, or `contains-string` for at-rules and long selectors.
- True compares a re-formatted copy of the output: attribute selectors keep the quotes of the source (`[data-spruce-style="test"]`), and long values wrap to new lines, so pick substrings that fit on one line.
- Add a new folder or file to the `_index.scss` of the matching entry.
