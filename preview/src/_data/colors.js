import { readFileSync } from 'node:fs';

/**
 * Parse the default $colors map from the Sass config into groups,
 * so the color page always shows every color key with its source value.
 */
export default function () {
  const source = readFileSync(new URL('../../../scss/config/_color.scss', import.meta.url), 'utf8');
  const map = source.slice(source.indexOf('$colors: map.deep-merge('), source.indexOf('$dark-colors: () !default;'));
  const groups = [];
  let current = null;

  map.split('\n').forEach((line) => {
    const group = line.match(/^ {4}'([a-z-]+)': \($/);
    const color = line.match(/^ {6}'([a-z-]+)':\s+(.+),$/);

    if (group) {
      current = { name: group[1], colors: [] };
      groups.push(current);
    } else if (color && current) {
      current.colors.push({ name: color[1], value: color[2] });
    }
  });

  return groups;
}
