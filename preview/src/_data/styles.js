import { readFileSync } from 'node:fs';

/**
 * Read the style preset names, labels and descriptions from the Sass config,
 * so the preview always lists every preset that the framework ships.
 */
export default function () {
  const source = readFileSync(new URL('../../../scss/config/_style.scss', import.meta.url), 'utf8');
  const presets = [];
  const pattern = /^ {2}'([a-z-]+)': \(\n {4}'label': '([^']+)',\n {4}'description': '([^']+)',/gm;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    presets.push({ name: match[1], label: match[2], description: match[3] });
  }

  return presets;
}
