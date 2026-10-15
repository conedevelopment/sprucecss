import { readFileSync } from 'node:fs';

export default JSON.parse(readFileSync(new URL('../../../package.json', import.meta.url), 'utf8'));
