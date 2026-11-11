import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { focusTimerHtml, mountFocusTimer } from '../index.js';

const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');

test('the package imports without a DOM and rejects a missing mount target', () => {
  assert.equal(typeof mountFocusTimer, 'function');
  assert.throws(() => mountFocusTimer(null), /HTML container/);
});

test('offline file and embed contain the unchanged standalone timer with npm attribution', async () => {
  const original = await read('index.html');
  assert.equal(focusTimerHtml, original.replace('utm_source=github', 'utm_source=npm'));
  assert.equal(await read('timer.html'), focusTimerHtml);
  const script = html => html.match(/<script>([\s\S]*?)<\/script>/)[1];
  assert.equal(script(focusTimerHtml), script(original));
  assert.match(focusTimerHtml, /utm_source=npm&amp;utm_medium=referral/);
  assert.doesNotMatch(focusTimerHtml, /<script[^>]+src=|<link[^>]+stylesheet/);
});

test('the package exposes only documented entry points and has no install hooks or runtime dependencies', async () => {
  const pkg = JSON.parse(await read('package.json'));
  assert.equal(pkg.license, 'Apache-2.0');
  assert.deepEqual(Object.keys(pkg.exports), ['.', './timer.html', './package.json']);
  assert.equal(pkg.dependencies, undefined);
  assert.equal(pkg.bin, undefined);
  for (const hook of ['preinstall', 'install', 'postinstall']) assert.equal(pkg.scripts[hook], undefined);
  assert.ok(pkg.files.includes('NOTICE'));
});
