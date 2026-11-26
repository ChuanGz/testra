import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { stripVTControlCharacters } from 'node:util';

const cli = fileURLToPath(import.meta.resolve('@playwright/test/cli'));
const spec = 'tests/reward-edit.spec.ts';

function run(variant, exitCode) {
  const path = `test-results/proof/${variant}/report.json`;
  rmSync(path, { force: true });
  const child = spawnSync(process.execPath, [cli, 'test', spec], {
    stdio: 'inherit',
    env: { ...process.env, TEST_PROOF: '1', TEST_STALE_PANEL: variant === 'defective' ? '1' : '0' },
  });

  assert.ifError(child.error);
  assert.equal(child.status, exitCode, `Unexpected Playwright exit for ${variant} (${child.signal ?? 'no signal'})`);
  const report = JSON.parse(readFileSync(path, 'utf8'));
  assert.deepEqual(report.errors, [], `Runner error in ${variant}`);
  assert.equal(report.suites.length, 1);
  const [suite] = report.suites;
  assert.equal(suite.specs.length, 1);
  const [scenario] = suite.specs;
  assert.match(scenario.title, /^REWARD-EDIT-001 /);
  assert.equal(scenario.tests.length, 1);
  const [test] = scenario.tests;
  assert.equal(test.expectedStatus, 'passed');
  assert.equal(test.results.length, 1);
  const [result] = test.results;
  assert.ok(result.attachments.some(attachment => attachment.name === 'trace'));
  return { test, result };
}

const defective = run('defective', 1);
assert.equal(defective.test.status, 'unexpected');
assert.equal(defective.result.status, 'failed');
assert.equal(defective.result.errors.length, 1);
const message = stripVTControlCharacters(defective.result.errors[0].message);
assert.match(message, /REWARD-EDIT-001 detail panel title after reload/);
assert.match(message, /Expected: "Duke of Snacks"/);
assert.match(message, /Received: "Sir Lump"/);

const corrected = run('corrected', 0);
assert.equal(corrected.test.status, 'expected');
assert.equal(corrected.result.status, 'passed');

console.log('Regression proof verified: stale panel FAIL, corrected panel PASS, same spec.');
