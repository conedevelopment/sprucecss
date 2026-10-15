---
name: sprucecss-library
description: Use the ready-made Spruce UI components, blocks and pages from the online library instead of writing them from scratch, when only the sprucecss npm package is installed. Look the item up in https://sprucecss.com/library.json (or llms.txt), fetch its Markdown endpoint (HTML, SCSS, JavaScript and ordered dependencies), copy it with its dependencies and adapt the content. Use whenever the user asks for a component, a page section (hero, pricing, FAQ, testimonials, footer…) or a whole page in a Spruce CSS project.
---

# Spruce UI library

The `sprucecss` npm package ships the framework only. The component library, **Spruce UI**, lives on the website: about 150 components, 50 blocks (full-width page sections) and 10 complete pages, all built with the Spruce conventions, tested in every design style, in dark mode and in RTL. Before you write a component, a block or a page, check whether the library already has it.

## 1. Find the item

Fetch the index once per task:

- **https://sprucecss.com/library.json**: every item with its `type` (`component`, `block`, `page`), `title`, `category`, `description`, the `markdown` URL and its dependencies.
- or **https://sprucecss.com/llms.txt**: the same list as Markdown, with the docs.

Pick by meaning, not by name: "a section with plans and prices" is the Pricing block or the Pricing Tiers block, "a slide-in cart" is the Cart Drawer. If two fit, read both descriptions and choose the closer one. For a whole page, start from the page template that's closest (a SaaS home, a portfolio, a course, a case study, a shop, a dashboard…) and swap or add blocks.

## 2. Fetch its endpoint

Every item has a Markdown endpoint: its preview URL with `.md` (for example `https://sprucecss.com/blocks/pricing-tiers.md`, `https://sprucecss.com/ui/card/lesson.md`, `https://sprucecss.com/pages/case-study.md`). It contains:

- **Dependencies:** the stylesheets in loading order (each with its own endpoint), and the scripts, external libraries first.
- **HTML:** the markup, rendered with the demo content.
- **SCSS:** starts with `@use 'sprucecss/scss/spruce' as *;`.
- **JavaScript:** vanilla, dependency-free (unless an external library is listed), hooked to `data-*` attributes.
- **Notes:** the accessibility and technical details. Read them; they explain what you must keep.

## 3. Copy it with its dependencies

1. Fetch the endpoint of every stylesheet dependency that isn't in the project yet, and copy its SCSS (and its JavaScript, if it has a script). Shared parts like `content-and-layout/container` and `content-and-layout/block-heading` are needed only once.
2. Save each SCSS file under the same name (`block/pricing-tiers.scss` → for example `scss/block/_pricing-tiers.scss`) and load them in the listed order, after the Spruce CSS base. Compile with `node_modules` as a Sass load path.
3. Load the scripts with `defer` in the listed order, external libraries first.
4. Copy the HTML.

## 4. Adapt it

- **Change the content, not the structure.** Replace the text, the links, the images and the number of items; keep the classes, the element types, the `aria-*` attributes, the hidden labels (`sr-only`) and the `data-*` hooks the script uses.
- **Keep the ids unique** when the same component appears twice on a page (the `id`, the `aria-labelledby`, the `for` and the `aria-controls` that point to it).
- **Style through tokens.** Change the look with the Spruce config or a design style (`data-spruce-style`), not by hardcoding colors in the copied SCSS. See the `sprucecss-styles` skill.
- **Compose pages with the rules.** Blocks on the same background drop their top padding (`sprucecss-block-rhythm`), lists laid out as rows clear the base list margins (`sprucecss-list-layout`), spacing comes from the parent (`sprucecss-spacing`).
- The HTML endpoint is plain HTML. The site renders it from Nunjucks templates with a data object (named in the endpoint); if the project uses a template engine, turn the repeated parts into loops yourself.

## 5. When you can't reach the library

If you have no web access, or the item doesn't exist, build it from the conventions in the `sprucecss-blocks` and `sprucecss` skills. Tell the user that the item may exist in Spruce UI (https://sprucecss.com/ui/getting-started/introduction/) so they can compare.

## Checklist

- [ ] Looked the item up in `library.json` (or `llms.txt`) before writing it.
- [ ] Copied every stylesheet dependency once, in the listed order, and the scripts with `defer`.
- [ ] Changed only the content; the classes, the semantics and the accessibility attributes are intact.
- [ ] Ids are unique on the page.
- [ ] The page follows the block rhythm, list layout and spacing rules.
