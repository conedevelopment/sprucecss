# Spruce CSS AI skills

Agent skills that teach AI coding assistants (Claude Code, and any tool that reads `SKILL.md` files) how to write Spruce CSS code and how to design in each Spruce style.

| Skill | Use it for |
|---|---|
| [`sprucecss`](sprucecss/SKILL.md) | Writing markup and SCSS with Spruce CSS v3: setup, helpers, conventions, class reference. |
| [`sprucecss-library`](sprucecss-library/SKILL.md) | Using the ready-made Spruce UI components, blocks and pages: find them in `library.json`, fetch their Markdown endpoint, copy them with their dependencies. |
| [`sprucecss-styles`](sprucecss-styles/SKILL.md) | Applying, scoping and creating style presets (`data-spruce-style`). |
| [`sprucecss-spacing`](sprucecss-spacing/SKILL.md) | Spacing from the parent: flex gap for sections, `layout-stack()` for text, no margin resets on children, inline elements wrapped. |
| [`sprucecss-list-layout`](sprucecss-list-layout/SKILL.md) | Lists whose items sit side by side (rows, clusters, grids): clear the base list's owl on the `li` elements and set their `padding-block` to 0. |
| [`sprucecss-blocks`](sprucecss-blocks/SKILL.md) | Building blocks (`.name-block > .container > .name-block__inner`), components and pages; logical properties and accessibility rules. |
| [`sprucecss-block-rhythm`](sprucecss-block-rhythm/SKILL.md) | The rhythm between the blocks of a page: one background, one padding (a block after a block on the same background has no top padding). |
| [`styles/minimal`](styles/minimal/SKILL.md) | Quiet, monochrome, flat. |
| [`styles/brutalist`](styles/brutalist/SKILL.md) | Thick outlines, hard shadows, loud colors. |
| [`styles/soft`](styles/soft/SKILL.md) | Rounded, pastel, diffused shadows. |
| [`styles/glass`](styles/glass/SKILL.md) | Frosted translucent surfaces over gradients. |
| [`styles/corporate`](styles/corporate/SKILL.md) | Dense, sharp, enterprise blue. |
| [`styles/playful`](styles/playful/SKILL.md) | Bubbly, candy colors, pressable buttons. |
| [`styles/editorial`](styles/editorial/SKILL.md) | Serif, paper tones, ink-red accent. |
| [`styles/terminal`](styles/terminal/SKILL.md) | Monospace, phosphor green on black. |

## Install

The skills ship with the npm package, so they always match your installed version.

**Claude Code (project level):**

```shell
mkdir -p .claude/skills
cp -r node_modules/sprucecss/skills/sprucecss node_modules/sprucecss/skills/sprucecss-library node_modules/sprucecss/skills/sprucecss-styles node_modules/sprucecss/skills/sprucecss-spacing node_modules/sprucecss/skills/sprucecss-list-layout node_modules/sprucecss/skills/sprucecss-blocks node_modules/sprucecss/skills/sprucecss-block-rhythm .claude/skills/
# Optional: the style you use
cp -r node_modules/sprucecss/skills/styles/editorial .claude/skills/sprucecss-style-editorial
```

**Claude Code (every project):** copy the same folders to `~/.claude/skills/`.

**Other assistants:** add the `SKILL.md` content to the tool's rules or instructions file (for example `AGENTS.md`, `.cursor/rules/`, `.github/copilot-instructions.md`).

More: https://sprucecss.com/docs/ai/skills/
