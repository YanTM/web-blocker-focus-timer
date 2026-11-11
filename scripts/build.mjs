import { readFile, writeFile } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const githubHtml = await readFile(new URL('index.html', root), 'utf8');
if ((githubHtml.match(/utm_source=github/g) || []).length !== 1) {
  throw new Error('Expected exactly one GitHub referral link in the standalone source.');
}
const html = githubHtml.replace('utm_source=github', 'utm_source=npm');
await writeFile(new URL('timer.html', root), html, 'utf8');
await writeFile(new URL('timer-html.js', root),
  '// Generated from the public standalone timer by scripts/build.mjs.\n' +
  'export const focusTimerHtml = ' + JSON.stringify(html) + ';\n', 'utf8');
