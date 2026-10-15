import { describe, it } from 'node:test';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as sass from 'sass';
import sassTrue from 'sass-true';

const testDir = path.dirname(fileURLToPath(import.meta.url));

// A Sass module can be configured only once per compilation, so every configuration has its own entry file.
const entries = [
  'test.scss', // The default configuration.
  'test-custom-properties.scss', // The CSS custom property mode (hooks, color fallback).
  'test-theme.scss' // A custom prefix, the dark mode and the style presets.
];

entries.forEach((entry) => {
  describe(entry, () => {
    sassTrue.runSass({ describe, it, sass }, path.join(testDir, entry));
  });
});
