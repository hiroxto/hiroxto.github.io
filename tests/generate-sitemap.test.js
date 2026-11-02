import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import test from 'node:test';
import convert from 'xml-js';

const generatorUrl = new URL('../src/generate-sitemap.ts', import.meta.url);

const runGenerator = (fetchBody) =>
  spawnSync(
    process.execPath,
    [
      '--input-type=module',
      '--eval',
      `globalThis.fetch = async () => { ${fetchBody} }; await import(${JSON.stringify(generatorUrl.href)});`,
    ],
    {
      encoding: 'utf8',
      env: { ...process.env, TZ: 'UTC' },
      timeout: 10_000,
    },
  );

test('sitemap contains only the root URL with a yearly change frequency', () => {
  const result = runGenerator(
    'return new Response("", { headers: { "last-modified": "Sat, 09 Oct 2021 00:00:00 GMT" } });',
  );
  assert.equal(result.status, 0, result.stderr);
  const sitemap = convert.xml2js(result.stdout, { compact: true });
  const urls = [sitemap.urlset.url].flat();
  assert.deepEqual(urls, [
    {
      loc: { _text: 'https://hiroxto.github.io/' },
      lastmod: { _text: '2021-10-09' },
      changefreq: { _text: 'yearly' },
      priority: { _text: '1.0' },
    },
  ]);
});

test('an HTTP error fails without emitting a sitemap', () => {
  const result = runGenerator(
    'return new Response("Unavailable", { status: 503 });',
  );
  assert.equal(result.status, 1);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /HTTP 503/);
});

for (const headers of [{}, { 'last-modified': 'invalid' }]) {
  test(`an unusable Last-Modified header fails: ${JSON.stringify(headers)}`, () => {
    const result = runGenerator(
      `return new Response("", { headers: ${JSON.stringify(headers)} });`,
    );
    assert.equal(result.status, 1);
    assert.equal(result.stdout, '');
    assert.match(result.stderr, /Invalid Last-Modified header/);
  });
}

test('a network error fails without emitting a sitemap', () => {
  const result = runGenerator('throw new TypeError("Network unavailable");');
  assert.equal(result.status, 1);
  assert.equal(result.stdout, '');
  assert.match(result.stderr, /Network unavailable/);
});
