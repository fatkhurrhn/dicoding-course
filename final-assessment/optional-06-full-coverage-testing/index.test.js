import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

test('sum should return the sum of two positive numbers', () => {
  assert.strictEqual(sum(2, 3), 5);
  assert.strictEqual(sum(10, 20), 30);
});

test('sum should return 0 if either number is negative', () => {
  assert.strictEqual(sum(-1, 5), 0);
  assert.strictEqual(sum(5, -1), 0);
  assert.strictEqual(sum(-5, -5), 0);
});

test('sum should return 0 if either input is not a number', () => {
  assert.strictEqual(sum('5', 5), 0);
  assert.strictEqual(sum(5, '5'), 0);
  assert.strictEqual(sum('a', 'b'), 0);
  assert.strictEqual(sum(null, 5), 0);
  assert.strictEqual(sum(5, undefined), 0);
  assert.strictEqual(sum(true, 5), 0);
  assert.strictEqual(sum(5, {}), 0);
  assert.strictEqual(sum([], 5), 0);
});

test('sum should return the correct sum when one or both inputs are zero', () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});
